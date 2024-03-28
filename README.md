<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Book</h3>

  <p align="center">
    A simple book that I use for documenting technical things that matter.
    <br />
    <a href="https://book-dun-three.vercel.app/"><strong>View Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/data-miner00/book">Explore Docs</a>
    ·
    <a href="https://github.com/data-miner00/book/issues">Report Bug</a>
    ·
    <a href="https://github.com/data-miner00/book/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A simplistic and boring site that I used to document all things technical that I find interesting and worth a note.

The decision to develop a place to keep my notes is rather coincidental, whereby I am studying some online articles and books about Rust and came across [this note](https://notes.iveselov.info/programming/cheatsheet-rust-option-vs-haskell-maybe) by Ivan Veselov and his teams on [Gitbook](https://www.gitbook.com/), which immediately caught my attention and sparked the idea of developing an online "book" website that serves as the knowledge repository about some quick but important topics for me and others that might find it useful.

> ⚠ Deprecation notice: This project will soon be obsolete. Part of it will be migrated to my [notes](https://github.com/data-miner00/notes) project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The technologies and tools used within this template.

- Nuxt 2
- TypeScript
- TailwindCSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

The list of tools that is used when development.

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn
  ```sh
  npm install yarn -g
  ```
- [Git](https://git-scm.com/downloads)

### Installation

Installation is fairly straightforward. Just clone the repo and run `yarn && yarn dev`.

1. Clone the repo
   ```sh
   git clone https://github.com/data-miner00/book.git
   ```
2. Install Node dependencies
   ```sh
   yarn
   ```
3. Start local dev server
   ```sh
   yarn dev
   ```
4. Generate static HTML for production
   ```sh
   yarn generate
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add dynamic table of content
- [x] Add menu footer
- [x] Update article footer
- [x] Add search function
- [ ] Add try catch to asyncData
- [x] Add image component
- [x] Extract Main page and Article page into different component that can be customized
- [x] Add mobile responsiveness
- [ ] Add custom 404 page
- [ ] Perform E2E tests
- [ ] Add "To top" button
- [x] Add tags
- [ ] Add search icon tooltip
- [x] Add Mobile header bar with burger menu
- [ ] Add accessibility and use semantic tags
- [ ] Crypto graph component

See the [open issues](https://github.com/data-miner00/book/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

List of resources that are helpful and would like to give credit to.

- [Cheatsheet: Option (in Rust) vs Maybe (in Haskell)](https://notes.iveselov.info/programming/cheatsheet-rust-option-vs-haskell-maybe)
- [GitBook](https://www.gitbook.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/data-miner00/book.svg?style=for-the-badge
[contributors-url]: https://github.com/data-miner00/book/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/data-miner00/book.svg?style=for-the-badge
[forks-url]: https://github.com/data-miner00/book/network/members
[stars-shield]: https://img.shields.io/github/stars/data-miner00/book.svg?style=for-the-badge
[stars-url]: https://github.com/data-miner00/book/stargazers
[issues-shield]: https://img.shields.io/github/issues/data-miner00/book.svg?style=for-the-badge
[issues-url]: https://github.com/data-miner00/book/issues
[license-shield]: https://img.shields.io/github/license/data-miner00/book.svg?style=for-the-badge
[license-url]: https://github.com/data-miner00/book/blob/master/LICENSE
[product-screenshot]: images/screenshot.png
