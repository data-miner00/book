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
updatedAt: 2023-11-30T07:51:16.872Z
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

|     | Tool              | Description                                                    | Link                                                   |
| --- | ----------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 1.  | `git`             | The Git version control system                                 | [Homepage](https://git-scm.com/)                       |
| 2.  | `bear`            | A tool that generates a compilation database for clang tooling | [GitHub](https://github.com/rizsotto/Bear)             |
| 3.  | `zsh`             | The next-generation command and shell interpreter              | [Homepage](https://www.zsh.org/)                       |
| 4.  | `zsh-completions` | An auto-complete complimentary tool for zsh                    | [GitHub](https://github.com/zsh-users/zsh-completions) |
| 5.  | `alacritty`       | A cross-platform, GPU accelerated terminal emulator            | [Homepage](https://alacritty.org/)                     |

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

## Web Browsers

|     | Tool       | Description                        | Link                                                        |
| --- | ---------- | ---------------------------------- | ----------------------------------------------------------- |
| 1.  | `firefox`  | The Firefox browser                | [Download Page](https://www.mozilla.org/en-US/firefox/new/) |
| 2.  | `chromium` | The "raw" version of Google Chrome | [Homepage](https://www.chromium.org/chromium-projects/)     |

## Text Editors

|     | Tool     | Description                                                             | Link                                            |
| --- | -------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| 1.  | `nano`   | A small text editor for terminal                                        | [Homepage](https://www.nano-editor.org/)        |
| 2.  | `vim`    | An improved version of the now-defunct Vi editor                        | [Homepage](https://www.vim.org/)                |
| 3.  | `neovim` | A fork of the Vim editor that has lua built-in                          | [Homepage](https://neovim.io/)                  |
| 4.  | `emacs`  | The extensible, customizable, self-documenting real-time display editor | [Homepage](https://www.gnu.org/software/emacs/) |

## Fonts

|     | Tools            | Description                                      | Link                                            |
| --- | ---------------- | ------------------------------------------------ | ----------------------------------------------- |
| 1.  | `noto-fonts-cjk` | The font to support Chinese-Japanese-Korean text | [GitHub](https://github.com/notofonts/noto-cjk) |

Patched Nerd-Fonts which supports ligatures and icons can be obtained via [nerdfonts.com](https://www.nerdfonts.com/font-downloads) and needs to be installed manually.

## Command Line Utilities

|     | Tools    | Description                                 | Link                                                              |
| --- | -------- | ------------------------------------------- | ----------------------------------------------------------------- |
| 1.  | `locate` | Locates the executables located on the disk | [Article](https://linuxize.com/post/locate-command-in-linux/)     |
| 2.  | `unzip`  | Unzips a `rar` or `zip` file to a directory | [Article](https://linuxize.com/post/how-to-unzip-files-in-linux/) |
| 3.  | `xclip`  | A clipboard provider for the X11 server     | [GitHub](https://github.com/astrand/xclip)                        |

## Data Transfer

|     | Tools                   | Description                                                | Link                                           |
| --- | ----------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| 1.  | `curl`                  | Transfers data across the internet via various protocols   | [Homepage](https://curl.se/)                   |
| 2.  | `wget`                  | A program that retrieves resources from remote web servers | [Homepage](https://www.gnu.org/software/wget/) |
| 3.  | `postman-bin` **(AUR)** | The Postman GUI client                                     | [Homepage](https://www.postman.com/)           |

## For Fun

|     | Tools     | Description                                       | Link                                               |
| --- | --------- | ------------------------------------------------- | -------------------------------------------------- |
| 1.  | `figlet`  | A text-to-ascii command line utility              | [GitHub](https://github.com/cmatsuoka/figlet)      |
| 2.  | `lolcat`  | A terminal text rainbownifier                     | [GitHub](https://github.com/busyloop/lolcat)       |
| 3.  | `cmatrix` | A terminal based "The Matrix" like implementation | [GitHub](https://github.com/abishekvashok/cmatrix) |