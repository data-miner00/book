# book

A simple cookbook written with [Nuxt.js](https://www.nuxtjs.org) and [TailwindCSS](https://www.tailwindcss.com), where the UI are referenced directly from [Gitbook](https://www.gitbook.com/). The module used for managing the articles is [@nuxt/content](https://content.nuxtjs.org/).

> Important!: The Nuxt version 2 and `@nuxt/content` version 1 is used for this project. It is different from the latest version of Nuxt version 3 and `@nuxt/content` version 2.

This project was developed for me to document the information that I've came across on various topics in the form of a note or memo for my future reference as I am forgetful. This site is open to the public to benefit those who might find it useful.

## Running on Local

The installation of this project is very straightforward. The preresquisite for this project is [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

```
git clone https://github.com/data-miner00/book.git
```

After the project is cloned locally, run `yarn` to install the dependencies.

```
yarn
```

To start a local development server,

```
yarn dev
```

To perform static-site generation,

```
yarn generate
```

The generated files will be placed within the `build` folder.

## Inspiration

The decision to develop a place to keep my notes is rather coincidental, whereby I am studying some online articles and books about Rust and came across [this note](https://notes.iveselov.info/programming/cheatsheet-rust-option-vs-haskell-maybe) by Ivan Veselov and his teams on [Gitbook](https://www.gitbook.com/), which immediately caught my attention and sparked the idea of developing an online book website that serves as the knowledge repository about some quick but important topics for me and others that might find it useful.

## Roadmaps

The development wotk items for this project are broken down into small and manageable pieces listed down below:

- [x] Add dynamic table of content
- [x] Add menu footer
- [x] Update article footer
- [ ] Add i18n
- [x] Add search function
- [ ] Add try catch to asyncData
- [x] Add image component
- [x] Extract Main page and Article page into different component that can be customized
- [ ] Add mobile responsiveness
- [ ] Add custom 404 page
- [ ] Perform TESTS
- [ ] Add "To top" button
- [x] Add tags
- [ ] Add search icon tooltip
- [ ] Add dark mode
- [ ] Redesign index page
- [ ] Add accessibility and use semantic tags
- [ ] Cryto graph component
