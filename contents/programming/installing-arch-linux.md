---
title: Installing Arch Linux
subtitle: A comprehensive guide to install Arch Linux from my personal experience
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - linux
  - installation
  - os
  - arch
  - hp
directory: programming
updatedAt: 2023-10-28T12:39:05.389Z
createdAt: 2023-10-28T12:39:05.389Z
---

<v-img src="arch.png" alt="Arch Linux logo" max-width="100px"></v-img>

## Pre-installation Steps

First and foremost, having some basic Linux, debugging and command line knowledge would be helpful for the installation process.

There are a couple of things that we need to do in order to install Arch Linux. Here are the prerequisites in an ordered manner.

1. Head over to Arch Linux [official download page](https://archlinux.org/download/).
2. Find the mirror of your country or closest to your country.
3. Download the `x86_64.iso` file and **optionally** download the `sha256sums.txt`
4. Verify the hash of the downloaded ISO by comparing to the text file's. In Microsoft Windows, we can use the built-in `certutil` command to verify the signature.
5. After the ISO image has been verified, we need to burn it into a new removable USB flash drive (4GB is enough) using [balenaEtcher](https://etcher.balena.io/) or [rufus](https://rufus.ie/en/).
6. Next, plug in the newly burned flash drive into the target machine.
7. Turn on the power and hit the <kbd>Esc</kbd> key repetitively until the BIOS menu shows up.
8. Depending on your hardware, you need to figure out the way to boot the computed with the flash drive.

### HP Pavilion

If you are installing Arch on a HP Pavilion machine, there might be a couple of extra steps that you need to take to boot the machine with the flash drive.

First, hit <kbd>F9</kbd> to enter the Boot Loader and select the name of the flash drive that has the Arch Linux image mounted. Try to hit <kbd>Enter</kbd> to boot with the flash drive.

If there is an error message saying "Selected boot image did not authenticate, press Enter to continue" and unable to proceed with the boot, hit <kbd>Enter</kbd> and subsequently <kbd>F10</kbd> to go to the BIOS settings. Navigate to "System Configuration", then "Boot Options", and finally enable the "Legacy Support" setting.

```
F10 BIOS settings -> System Configuration -> Boot Options -> Legacy Support -> Enable
```

The machine will reboot after the changes have been saved and it will prompt "Operating System Boot Mode Change", and instruct to enter a four-digit number followed by <kbd>Enter</kbd> to confirm the change.

At this point, the flash drive should now be bootable without any hindrance.

## Installation

The installation steps are ordered as follows. Only proceed with the installation if the boot is completed and landed on the tty screen.

### Check and Connect WiFi

This step is to connect the machine to the internet via WiFi. For ethernet users, this step can be skipped.

First, type `iwctl` to enter into the [iNet Wireless Daemon (iwd)](https://wiki.archlinux.org/title/iwd) mode.

```
iwctl
```

Next, type the following command to show, scan and connect to the WiFi network. The `#` sign indicates that it is in the iwd mode.

```
# station wlan0 show
# station wlan0 scan
# station wlan0 connect 'Wifi Name'
Passphrase: ***
# quit
```

### Update GPG Key

This step can be skipped if we don't intend to use the `archinstall` script to install Arch Linux.

```
pacman-key --init
pacman-key --populate archlinux
```

### Set Time

Next, we need to synchronize the Linux system clock with an NTP server with the following command.

```
timedatectl set-ntp true
timedatectl status
```

### Partition Disk

Disk partitioning is the most crucial part of installing Arch Linux. To list the hard disks available, use the `fdisk` command with `-l` flag to retrieve the info.

```
fdisk -l
```

There should be at least `sda` in the results, which will be used for formatting and partitioning. To start the process, provide the disk path to `fdisk` to enter the `fdisk` mode.

```
fdisk /dev/sda
```

The prompt should change to `Command (m for help):`. We will need to partition the disk into three sections, first is for the EFI system, second is for the swap and third is for the general file system.

Hit <kbd>g</kbd> to create a label, and followed by <kbd>n</kbd> to create a partition. To create a partition, it will prompt for _partition number_, _start_ and _end_. Here is what I do to create 3 new partitions. The consecutive commas means that I leave the field blank and use the default value.

```
Command (m for help): g
Command (m for help): n, , ,+550M // EFI system
Command (m for help): n, , ,+16G // Linux swap
Command (m for help): n, , , // Linux filesystem
```

### Change Partition Type

By default, all partitions created with the `n` command are of type "Linux filesystem". Hence, we will need to correct the partition type for the first partition to "EFI system" and the second partition to "Linux swap". The third partition is correct.

To update the partition type, use the `t` command.

```
Command (m for help): t

Partition 1 --> 1 (EFI system)
Partition 2 --> 19 (Linux swap)
```

After the partitions has been correctly configured, type <kbd>w</kbd> to save the changes and exit `fdisk`.

### Create Storage

Next, create the respective storage according to their partition type. The partitioning with `fdisk` does not create the usable storage type altogether.

```
mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
swapon /dev/sda2
mkfs.ext4 /dev/sda3
```

### Mounting sda3

We need to mount `/dev/sda3` to `/mnt` to work with it.

```
mount /dev/sda3 /mnt
```

### Installing System

After the filesystem is mounted, run the `pacstrap` command to install Arch Linux into our hard drive (sda3).

```
pacstrap /mnt base base-devel linux linux-firmware
```

### Fstab

Next, generate a file system table with the following command.

```
genfstab -U /mnt >> /mnt/etc/fstab
```

### Arch Chroot

Enter the chroot mode with the following command. It is required for us to continue the installation steps hereafter.

```
arch-chroot /mnt
```

### Set Timezone

To configure the correct time zone for our machine, we can use the `ln` (link) command as follows.

```
ln -sf /usr/share/zoneinfo/<REGION>/<CITY> /etc/localtime

# example
ln -sf /usr/share/zoneinfo/Asia/Kuala_Lumpur /etc/localtime
```

If you are unsure of your region or city, use the following command to explore the available regions and cities or visit the [timezone table Wikipedia page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

```
ls /usr/share/zoneinfo
```

### Set Hardware Clock

Hardware clock is different from Linux managed clock. Hardware clock runs even after the system is switched off. We need to sync the hardware clock with the current system clock by running `hwclock` with the `--systohc` flag which stands for "system to hardware clock."

```
hwclock --systohc
```

### Installing Nano

Nano is a simple command line text editor that we will use for editing the locale file in the next step. Run the following command to install Nano. Alternatively, you can use Vim or Emacs for editing files. In that case, you may skip this and install them instead.

```
pacman -S nano
```

### Configuring Locales

Locales are used for displaying information that makes most sense for you by providing the context to the system. Open the `/etc/locale.gen` file and **uncomment** the locale(s) that you want to use.

```
nano /etc/locale.gen
```

After saving the file, run `locale-gen` to generate the symlink.

```
locale-gen
```

### Set Hostname

Hostname is the name that identifies the computer. For my case, I am using HP Pavilion and hence I will use `pavilion` as the hostname. However, there is no strict rules when it comes to setting the hostname. Use whatever name as you please.

We need to set the hostname by creating a new file at `/etc/hostname` and insert the desired hostname at the first line of the file.

```
nano /etc/hostname
```

After that, save and exit the text editor.

### Set Hosts

Next, we need to configure the hosts of the machine.

```
nano /etc/hosts
```

Copy the following content and append to the `/etc/hosts` file and replace the `<hostname>` with your actual hostname.

```
127.0.0.1    localhost
::1          localhost
127.0.1.1    <hostname>.localdomain    <hostname>
```

Here is how it looks like for my configuration file.

```
127.0.0.1    localhost
::1          localhost
127.0.1.1    pavilion.localdomain    pavilion
```

### Create Password

Next, we need to set a password for our root user with the `passwd` command.

```
passwd
```

Enter the password and confirm the password as prompted.

### Add User

Currently, we only have one superuser which is the "root" and it is recommended to create an underprivileged user and use that user instead for better security. We can create a new user and configure a password for that user as follows.

```
useradd -m <username>
passwd <username>
```

### Add User to Group

We need to add the newly created user to some predefined groups to gain access to features that otherwise will need root access.

```
usermod -aG wheel,audio,video,optical,storage <username>
```

### Install sudo

To use the `sudo` command, it will need to be installed first.

```
pacman -S sudo
```

Open the sudoer's file and uncomment `%wheel ALL=(ALL) ALL`.

```
EDITOR=nano visudo
```

Save the file and exit Nano.

### Install grub and deps

```
pacman -S grub efibootmgr dosfstools os-prober mtools
```

### Create Boot Dir

```
mkdir /boot/EFI
mount /dev/sda1 /boot/EFI
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck
```

### Create Grub Config

Next, generate a grub config file with the command below.

```
grub-mkconfig -o /boot/grub/grub.cfg
```

### Install NetworkManager

NetworkManger is used for WiFi connection.

```
pacman -S networkmanager
```

To enable the NetworkManager, type the command below.

```
systemctl enable NetworkManager
```

### Exit Chroot and Unmount

Exit the chroot and unmount the storage partition.

```
exit
umount -l /mnt
```

The Arch Linux has been installed. To verify the installation, reboot the machine with the USB flash drive **unplugged**. You should still be able to boot into Arch Linux after that.

## Setup WiFi Connection (After Reboot)

After rebooting the machine **for the first time**, we will need to connect to the WiFi again. This time using the NetworkManager that was installed earlier.

If the NetworkManager service is not running yet, use the `enable` command to activate it and run `status` to verify that it is already running in the background.

```
systemctl enable NetworkManager.service --now
systemctl status NetworkManager.service
```

To connect to a network, simply run the terminal UI of NetworkManager as shown. We should be able to connect to our WiFi network by navigating the UI.

```
nmtui
```

Alternatively, we can connect the WiFi by using the one-liner CLI command instead:

```
nmcli device wifi connect 'WiFi Name' password *****
```

After connected to the network, we can verify the internet access with `ping`.

```
ping google.com
```

Congratulations. Everything is now completely set up. Next, we can install our favourite packages and software such as window manager, desktop environment and login manager according to our needs.

## Miscellaneous

This section is nothing related to the installation of Arch Linux. It only includes my personal preference that I would like to document. Feel free to ignore this section.

### Install Neovim From Source

```
git clone https://github.com/neovim/neovim.git
cd neovim
make CMAKE_BUILD_TYPE=Release
sudo make install
```

- [help](https://github.com/neovim/neovim/wiki/Installing-Neovim#install-from-source)

### Other Software/Packages

- `htop`
- `btop`
- `neofetch`
- `pfetch`
- `base-devel`
- `nano`
- `git`
- `vim`
- `noto-font-cjk`

## Reference

- [Arch Linux Installation Guide 2020](https://www.youtube.com/watch?v=PQgyW10xD8s)
- [Hyprland on Arch Install script -V2](https://www.youtube.com/watch?v=8GmpCwBqHCA)
- [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide)
- [Arch Linux Postinstall Recommendations](https://wiki.archlinux.org/title/General_recommendations)
- [Synchronizing a Linux System Clock with NTP Server](https://tecadmin.net/synchronizing-a-linux-system-clock-with-ntp-server/)
- [7 Linux hwclock Command Examples to Set Hardware Clock Date Time](https://www.thegeekstuff.com/2013/08/hwclock-examples/)
- [No Internet after reboot](https://www.reddit.com/r/archlinux/comments/vala0i/no_internet_after_reboot/)
