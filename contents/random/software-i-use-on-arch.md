---
title: Software I use on Arch Linux
subtitle: Useful tools and packages that I've garnered after the minimal Arch installation
topic: Random
displayTopic: Random
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - linux
  - arch
  - software
  - development
  - tools
directory: random
updatedAt: 2024-02-05T13:50:12.833Z
createdAt: 2023-11-30T07:51:16.872Z
---

<v-img src="arch.png" alt="Arch Linux logo" max-width="100px"></v-img>

## Preface

Here is a list of tools that can be installed from the official repository via pacman. The packages can be looked up on [Archlinux.org](https://archlinux.org/) through the package search. The packages can be installed via

```
sudo pacman -S <package-name> --noconfirm
```

Some other packages that is not on the official repository can be acquired from the [Arch User Repository (AUR)](https://aur.archlinux.org/) instead. An AUR helper such as [yay](https://github.com/Jguer/yay) can be used to download packages from the AUR.

## Essential Tools

|     | Tool                | Description                                                    | Link                                                          |
| --- | ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| 1.  | `git`               | The Git version control system                                 | [Homepage](https://git-scm.com/)                              |
| 2.  | `bear`              | A tool that generates a compilation database for clang tooling | [GitHub](https://github.com/rizsotto/Bear)                    |
| 3.  | `zsh`               | The next-generation command and shell interpreter              | [Homepage](https://www.zsh.org/)                              |
| 4.  | `zsh-completions`   | An auto-complete complimentary tool for zsh                    | [GitHub](https://github.com/zsh-users/zsh-completions)        |
| 5.  | `alacritty`         | A cross-platform, GPU accelerated terminal emulator            | [Homepage](https://alacritty.org/)                            |
| 6.  | `tmux`              | A terminal multiplexer for Unix operating systems              | [GitHub](https://github.com/tmux/tmux)                        |
| 7.  | `screenkey`         | A key screencast utility for X11                               | [Homepage](https://www.thregr.org/wavexx/software/screenkey/) |
| 8.  | `man-db`            | The manual page reader for most of the unix tools available    | [Webpage](https://linux.die.net/man/)                         |
| 9.  | `cool-retro-term`   | A 70s nostalgic terminal emulator                              | [GitHub](https://github.com/Swordfish90/cool-retro-term)      |
| 10. | `fcitx5-im`         | A group of essential fcitx5 tools                              | [GitHub](https://github.com/fcitx/fcitx5)                     |
| 11. | `flatpak`           | A utility for software deployment and package management       | [Homepage](https://flatpak.org/)                              |
| 12. | `thunderbird`       | An open-source email client                                    | [Homepage](https://www.thunderbird.net/en-US/)                |
| 13. | `libreoffice-fresh` | A free alternative to Microsoft 365                            | [Homepage](https://www.libreoffice.org/)                      |
| 14. | `dunst`             | A notification daemon                                          | [GitHub](https://github.com/dunst-project/dunst)              |

> Zsh on [Arch Wiki](https://wiki.archlinux.org/title/zsh)

## Device Monitoring

|     | Tool               | Sample Usage | Link                                             |
| --- | ------------------ | ------------ | ------------------------------------------------ |
| 1.  | `neofetch`         | `neofetch`   | [GitHub](https://github.com/dylanaraps/neofetch) |
| 2.  | `pfetch` **(AUR)** | `pfetch`     | [GitHub](https://github.com/dylanaraps/pfetch)   |
| 3.  | `htop`             | `htop`       | [Homepage](https://htop.dev/)                    |
| 4.  | `btop`             | `btop`       | [GitHub](https://github.com/aristocratos/btop)   |

## Drivers

|     | Tool             | Description                      | Link                              |
| --- | ---------------- | -------------------------------- | --------------------------------- |
| 1.  | `pipewire`       | A low-level multimedia framework | [Homepage](https://pipewire.org/) |
| 2.  | `pipewire-pulse` | A PulseAudio server              | -                                 |

## Multimedia

|     | Tool         | Description                                          | Link                                      |
| --- | ------------ | ---------------------------------------------------- | ----------------------------------------- |
| 1.  | `vlc`        | A cross-platform multimedia player                   | [Homepage](https://www.videolan.org/vlc/) |
| 2.  | `krita`      | A free and open source professional painting program | [Homepage](https://krita.org/en/)         |
| 3.  | `gimp`       | A cross-platform image editor                        | [Homepage](https://www.gimp.org/)         |
| 4.  | `obs-studio` | A program for video recording and live streaming     | [Homepage](https://obsproject.com/)       |
| 5.  | `feh`        | A fast and lightweight image viewer                  | [GitHub](https://github.com/derf/feh)     |
| 6.  | `blender`    | A free and open source 3D modeling program           | [Homepage](https://www.blender.org/)      |
| 7.  | `kdenlive`   | A free video editing platform                        | [Homepage](https://kdenlive.org/en/)      |

## Web Browsers

|     | Tool                        | Description                            | Link                                                            |
| --- | --------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| 1.  | `firefox`                   | The Firefox browser                    | [Download Page](https://www.mozilla.org/en-US/firefox/new/)     |
| 2.  | `chromium`                  | The "raw" version of Google Chrome     | [Homepage](https://www.chromium.org/chromium-projects/)         |
| 3.  | `firefox-developer-edition` | The Firefox browser but for developers | [Download Page](https://www.mozilla.org/ast/firefox/developer/) |

## Text Editors

|     | Tool       | Description                                                             | Link                                            |
| --- | ---------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| 1.  | `nano`     | A small text editor for terminal                                        | [Homepage](https://www.nano-editor.org/)        |
| 2.  | `vim`      | An improved version of the now-defunct Vi editor                        | [Homepage](https://www.vim.org/)                |
| 3.  | `neovim`   | A fork of the Vim editor that has lua built-in                          | [Homepage](https://neovim.io/)                  |
| 4.  | `emacs`    | The extensible, customizable, self-documenting real-time display editor | [Homepage](https://www.gnu.org/software/emacs/) |
| 5.  | `obsidian` | A powerful note taking Markdown-based editor as your second brain       | [Homepage](https://obsidian.md)                 |

## Fonts

|     | Tools            | Description                                      | Link                                            |
| --- | ---------------- | ------------------------------------------------ | ----------------------------------------------- |
| 1.  | `noto-fonts-cjk` | The font to support Chinese-Japanese-Korean text | [GitHub](https://github.com/notofonts/noto-cjk) |

Patched Nerd-Fonts which supports ligatures and icons can be obtained via [nerdfonts.com](https://www.nerdfonts.com/font-downloads) and needs to be installed manually.

## Command Line Utilities

|     | Tools    | Description                                 | Link                                                                 |
| --- | -------- | ------------------------------------------- | -------------------------------------------------------------------- |
| 1.  | `locate` | Locates the executables located on the disk | [Article](https://linuxize.com/post/locate-command-in-linux/)        |
| 2.  | `unzip`  | Unzips a `rar` or `zip` file to a directory | [Article](https://linuxize.com/post/how-to-unzip-files-in-linux/)    |
| 3.  | `xclip`  | A clipboard provider for the X11 server     | [GitHub](https://github.com/astrand/xclip)                           |
| 4.  | `scrot`  | A minimal screenshot tool for X             | [GitHub](https://github.com/resurrecting-open-source-projects/scrot) |

## Data Transfer

|     | Tools                   | Description                                                    | Link                                           |
| --- | ----------------------- | -------------------------------------------------------------- | ---------------------------------------------- |
| 1.  | `curl`                  | Transfers data across the internet via various protocols       | [Homepage](https://curl.se/)                   |
| 2.  | `wget`                  | A program that retrieves resources from remote web servers     | [Homepage](https://www.gnu.org/software/wget/) |
| 3.  | `postman-bin` **(AUR)** | The Postman GUI client                                         | [Homepage](https://www.postman.com/)           |
| 4.  | Speedtest CLI           | A lightweight utility to measure network connectivity by Ookla | [Page](https://www.speedtest.net/apps/cli)     |

## For Fun

|     | Tools                | Description                                        | Link                                               |
| --- | -------------------- | -------------------------------------------------- | -------------------------------------------------- |
| 1.  | `figlet`             | A text-to-ascii command line utility               | [GitHub](https://github.com/cmatsuoka/figlet)      |
| 2.  | `lolcat`             | A terminal text rainbownifier                      | [GitHub](https://github.com/busyloop/lolcat)       |
| 3.  | `cmatrix`            | A terminal based "The Matrix" like implementation  | [GitHub](https://github.com/abishekvashok/cmatrix) |
| 4.  | cointop (deprecated) | A terminal based, top-like cryptocurrency explorer | [Homepage](https://docs.cointop.sh/)               |
| 5.  | `cowsay`             | A tool that converts a text to a cow ascii art     | [GitHub](https://github.com/piuccio/cowsay)        |

## Programming

|     | Tools                | Description                                        | Link                                       |
| --- | -------------------- | -------------------------------------------------- | ------------------------------------------ |
| 1.  | `nvm` **(GitHub)**   | A version manager for Node.js                      | [GitHub](https://github.com/nvm-sh/nvm)    |
| 2.  | `bun` **(Homepage)** | All-in-one JavaScript toolkit and runtime          | [Homepage](https://bun.sh/)                |
| 3.  | `python`             | The latest version of the Python interpreter       | [Homepage](https://www.python.org/)        |
| 4.  | `python-pip`         | The officially endorsed package manager for Python | [Homepage](https://pip.pypa.io/en/stable/) |
| 5.  | `jdk-openjdk`        | A free and open source Java Development Kit        | [Homepage](https://openjdk.org/)           |
| 6.  | `luarocks`           | A package manager for Lua                          | [Homepage](https://luarocks.org/)          |
| 7.  | `gcc-fortran`        | A GNU Fortran compiler                             | [Homepage](https://gcc.gnu.org/fortran/)   |
| 8.  | ghcup **(Homepage)** | A Haskell toolchain                                | [Homepage](https://www.haskell.org/ghcup/) |

## Communications

|     | Tools     | Description                             | Link                             |
| --- | --------- | --------------------------------------- | -------------------------------- |
| 1.  | `discord` | A free instant messaging app for gamers | [Homepage](https://discord.com/) |

## Security

|     | Tools           | Description                       | Link                                                                 |
| --- | --------------- | --------------------------------- | -------------------------------------------------------------------- |
| 1.  | `ufw` **(AUR)** | An uncomplicated firewall program | [Arch Wiki](https://wiki.archlinux.org/title/Uncomplicated_Firewall) |
