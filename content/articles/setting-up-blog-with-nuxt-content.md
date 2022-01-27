---
title: Setting up a blog with Nuxt Content
subtitle: My step-by-step approach to creating a fully-featured Nuxt blog
topic: Technology
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - vue
  - nuxt
  - blog
  - tutorial
  - webdev
---

Having a **personal blog** is pretty much a standard and fundamental as a developer to _express themself_ and _sharing their knowledge_ to the world. There are countless tools and technologies out there for anyone to create their own blog, whether by paid or free of charge.

For developers like us, we might be interested to build our blog with technologies ourselves such as vanilla HTML, CSS and JavaScript, or even leverage the powerful frameworks out there such as [Next.js](https://nextjs.org/) and [Gatsby.js](https://www.gatsbyjs.com/) to quickly kickstart the development that scales very well.

[Nuxt.js](nuxtjs.org/) is a pretty good candidate for creating a decent blog with minimal learning curve. It has a library plugin called [Nuxt Content](https://content.nuxtjs.org/) that allows your Nuxt project to become a git-based headless CMS that the contents are managed alongside with the source code of the project repository.

## Setting up the project

To scaffold a fully configured, fresh Nuxt project, either Yarn or NPM can be used.

```
# npm
npx create-nuxt-app my-blog

# yarn
yarn create nuxt-app my-blog
```

Do note that there is a very subtle difference between `yarn` and `npx` where the create and nuxt have their own nuances to be followed. You will be greeted with prompts for the project installation options.

For the demonstration later on, we'll be using `yarn` instead. There is always an equivalent syntax to `npm` for every steps performed, so do keep that in mind to find out yourself if you are using `npm`.

### Installing Dependencies

After the project folder is created, we proceed to add the dependencies that we need for developing our blog. Firstly, we will need to install Nuxt Content module via

```
yarn add @nuxt/content
```

After that, we need to register the module inside `nuxt.config.js` file as follows:

```js
export default {
  // ...
  modules: ['@nuxt/content'],
  // ...
}
```

We are now able to transpile any markdown file into html conveniently with this module.

If you want to use [Pug](https://pugjs.org/api/getting-started.html) for preprocessing your markup, and [Sass](https://sass-lang.com/) to preprocessing your CSS, run the following commands respectively. More about it on the [Nuxt's official documentation](https://nuxtjs.org/docs/features/configuration/#pre-processors).

```
# Pug
yarn add -D pug pug-plain-loader

# Sass
yarn add -D sass sass-loader@10 fibers
```

### Setting up directories

The contents of our articles and blogs must reside in a specific folder named `/content` relative to the root, so we have to create that folder first.

There are two ways to structure our content, in which it depends on your personal preference. We'll learn how to do both ways. The trees shown are only showing part of the entire project.

**Structure 1:**

```
my-blog(root)
├───assets
│   └───images
│   	└───my-image.jpg # sample image file
├───components
└───content
	└───mymod
		└───my-first-article.md # sample article file
```

With this approach, we created a subfolder inside the content folder, and then created a sample markdown file for our first article. The `my-image.jpg` inside the images folder is assumed to be used by the article that we've created. `mymod` is just a placeholder name that categorize your articles and obviously we would name it something more useful such as `articles` or `blogs` alike.

**Structure 2:**

```
my-blog(root)
├───components
└───content
	└───mymod
		└───my-first-article
			├───images
			│   └───my-image.jpg
			└───index.md
```

This time, `my-first-article` inside `/content/mymod` is a folder instead of a markdown file. It consists of a folder named images that will stores all of the images used by the content.

We are going to follow the first approach in which it is a teeny-tiny bit simpler than latter approach. If you are interested in the second approach, this [article](https://gilberttanner.com/blog/creating-a-blog-with-nuxt-content) by Gillbert Tanner will show you exactly how to do that.

### Simple content

Let's quickly populate some content inside the `my-first-article.md` file.

```md
## Hello

This is my first article!
```

## Slug Page

Now, we will be dealing with the actual view(page) that renders the dynamic content by your blog.

Inside the `/pages` folder, create a subdirectory named after your name of choice in the decision above, as in the `/content` folder. In my case, I will be sticking with the name `mymod` for now. You will have the directory looked like `/pages/mymod`. Create a file called `_slug.vue` within the folder. This is the vue file that will take care of the rendering of your dynamic content to the browser.

Slug here means the unique identifier of your article based on your title. It is composed of lowercased title seperated with a dash. An article with the title _Bitcoin vs Ethereum_ will have the slug as `bitcoin-vs-ethereum`. The slug will allow your article to be reach at `/mymod/bitcoin-vs-ethereum`. The use of slug instead of conventional ID such as `/mymod/273464` is having a great search engine optimization (SEO) that will greatly improve the searchability of your article.

Coming back from the explanations, after you have created the `_slug.vue`, paste the following code:

```html
<template>
  <div>
    <nuxt-content :document="article"></nuxt-content>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    //@ts-ignore
    async asyncData({ $content, params }) {
      const article = await $content('mymod', params.slug).fetch()
      return { article }
    },
  })
</script>
```

Lets have a quick runthrough about what we did.

In the `script` section we are using the `asyncData` hook to fetch the data that resides within the `/content` folder. Within the hook, all we do is just fetch our article instance with the `$content` function injected by Nuxt Content and store the article instance inside a constant named `article`. After that, we need to return the `article` inside an object for it to be accessed globally within the component.

Inside the template, `<nuxt-content>` component is used to translate the markdown into HTML that is readable by the browser. We need to pass in the `article` returned by `asyncData` into the `document` props of the `nuxt-content` component.

> **Note:** The `asyncData` hook is only available for components inside the `/pages` folder. If you are using this inside a custom component or layouts, it will not work. Instead, you will have to use the [API](#working-with-api) or `this.$content` directly in the `mounted` hook to fetch the article data.

On your browser, key-in your local host and port, followed by `/mymod/my-first-article` which has the same name for the Markdown file that you created. Now you should be able to see all your contents from your md file rendered successfully within the page.

### Accessing Metadata

We can access the metadata for the article along with the `article` object retrieved. Below are a list of metadata that are built in and can be extremely useful in most occasions.

| Metadata    | Type            | Description                          | Example                  |
| ----------- | --------------- | ------------------------------------ | ------------------------ |
| `createdAt` | `string`        | Timestamp of creation                | 2021-09-23T13:31:06.399Z |
| `updatedAt` | `string`        | Timestamp of update                  | 2021-09-30T12:36:19.170Z |
| `dir`       | `string`        | Directory of the article             | `/mymod`                 |
| `extension` | `string`        | Extension of file type               | `.md`                    |
| `path`      | `string`        | Relative path from `/content`        | `/mymod/my-first-blog`   |
| `slug `     | `string`        | Slug of the article                  | `my-first-blog`          |
| `toc`       | `Array<Object>` | Table of content based headings used | -                        |

All of the metadata can be accessed with `article.<metadata>`. E.g. `article.createdAt` to get `2021-09-23T13:31:06.399Z`. Additionaly, the `article.body` gives you the entire article content in an object, but you would not need to deal with it normally.

### Styling Content

All your article's content in the markdown that is rendered into the webpage are encompassed by a `div` element that have a class called `nuxt-content`. So, to style the element inside the `nuxt-content`, you will have to prefix your element with `.nuxt content `, just like below to style it according to your desire.

```css
/* Tailwind CSS */
.nuxt-content h1,
.nuxt-content h2 {
  @apply text-2xl font-semibold mt-10 mb-4 relative cursor-pointer hover:text-gray-500;
}

/* Normal CSS */
.nuxt-content h3 {
  font-size: 30px;
  color: #0f141e;
  font-weight: 700;
  margin: 10px;
}
```

> Note: All the styling used are only for demo purposes and you DON'T NEED to follow any of them. Instead you'll learn how to select and handle the elements that might be useful when you style yourself.

It includes the use of [Tailwind CSS](https://tailwindcss.com/) for styling and normal CSS to style any element.

For Tailwind CSS, you might use the `@apply` directive for each different style class in different line for clarity as well:

```css
.nuxt-content h1,
.nuxt-content h2 {
  @apply text-2xl;
  @apply font-semibold;
  @apply mt-10 mb-4;
  @apply relative;
  @apply cursor-pointer;
  @apply hover:text-gray-500;
}
```

They will behave exactly the same.

However, there are some tricky elements that you will need to take notice of when styling them, namely `<code>` and `<ul>`.

There are 2 scenario which Nuxt Content will translate into a `<code>` tag, **inline code** and **block code**.

You will notice that there is a small code that is within a single sentence and a code block that takes up all the width of the article just as shown above. If you tries to style the inline code only with `.nuxt-content code` selector, both the big and small code block will apply the same styling as specified, and generally we don't want that. In fact, the big code block are being styled nicely by Nuxt Content for you already using [Prism](https://prismjs.com/) syntax highlighter. We'll talk about how to customize the theme for that later. So for now, we only need to style the small code block and we can select it by using `.nuxt-content code:not(.nuxt-content pre code)`.

```css
.nuxt-content code:not(.nuxt-content pre code)  {
  @apply font-mono;
  @apply bg-gray-100;
  @apply px-2;
  @apply py-1;
  @apply rounded;
}
```

> Note: Using `nuxt generate` on this will cause the output to be rendered as `.nuxt-content code:not(.nuxt-contentprecode)` instead that just render the latter part of the selector useless. This will work fine in local development server nonetheless. A simple workaround is to seperate the into `.nuxt-content code` and `.nuxt-content-highlight pre code` for different styles.

Usually, we will leave margin for every element on top and bottom for better visual hierarchy. For the `<ul>` tag, there might be instance in which there are another list nested inside a list, so by selecting them like `.nuxt-content ul` is not recommended. Instead, we can select only the parent `<ul>` by using `.nuxt-content > ul` and this will not affect the inner list.

That should be it for a quick styling walkthrough for the blog elements. Next we will move into table of contents.

### Table of Contents

Table of contents can be extremely helpful to readers to navigate quickly between the articles or blogs, especially in a more lengthy and information-rich tutorials. Fortunately, Nuxt Content has the support for this natively by taking the Headers in the document and placed nicely within the `article` object in which we can use out of the box.

One thing to note however, is that it is recommended to denote the sections of the document starting with `h2`, which is equivalent to `##` in markdown and `###` for the subtitle. In fact, any uses of `h1 (#)` will **NOT** appear in the table of content provided. So please bear in mind the nuances of using table of content in Nuxt Content.

We can get the api by accessing with `article.toc` array as mentioned (here)[#accesing-metadata]. The title and its corresponding ID can be visualised as follows:

```json
[
  {
    "text": "A cool title",
    "id": "a-cool-title",
    "depth": 2
  },
  {
    "text": "A cool subtitle",
    "id": "a-cool-subtitle",
    "depth": 3
  }
]
```

The first item in the array is the wrapper object for the header "A cool title" in the article, whereas the `id` field is the auto-generated ID assigned to that particular title. It essentially transform the title into kebab case and lowercase letters. The depth represents how deeply nested is that particular subtitle in the document.

```html
<nuxt-link v-for="link in article.toc" :key="link.id" :to="`#${link.id}`">
  <span
    :class="[
      { 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 },
    ]"
    >{{ link.text }}</span
  >
</nuxt-link>
```

It is better to avoid having same title within your blog as it will disrupt the reference of the ID later on and honestly it doesn't make sense to have same title within one article or blog. So don't be the rule breaker will ya.

### Working with API

There may be an occasion that you will need to work with the API provided by Nuxt Content as you can fetch data to the other service that consumes the blogs. The more relevant usage is when you wanted to display some data inside a component, e.g. a sidebar that lists all of the available blogs.

We can access the API with parameterize query string such as [http://localhost:3000/\_content/articles?only=title](http://localhost:3000/_content/articles?only=title) to retrieve all the titles that we need for the sidebar component. We can also get the entire blog in JSON format with this API: [http://localhost:3000/\_content/articles](http://localhost:3000/_content/articles)

### Prism Theme

Nuxt Content comes with a built-in theme for the code blocks. To customize the theme to suit your likings, you will need to install the `prism-theme` package.

```sh
yarn add prism-themes
```

In the `nuxt.config.js`, paste the following code inside the `export default` object.

```js
content: {
  markdown: {
  	prism: {
  	  theme: 'prism-themes/themes/prism-duotone-dark.css',
    },
  },
},
```

You can use any theme that you want from the package. The documentation can be found [here](https://github.com/PrismJS/prism-themes).

### Components

It is possible to use a Vue component inside the Markdown file with Nuxt Content. First of all, you need to navigate to the `components` folder and create a subfolder named `global`. It is the directory in which your Vue component for the Markdown resides. Make sure that auto import function is enabled inside yout `nuxt.config.js`.

Let's create a component called `VImage.vue` inside `global`. This is the component that we can use to showcase any Images into the blog. In fact, if you tried to use the Markdown way to show images, It will **_NOT_** work.

Paste the following code into `VImage.vue`. Feel free to modify the code as you wish. In my case, I've added a caption section under the image and provide option to size the image shown.

```vue
<template>
  <div>
    <img
      :src="fullpath"
      :alt="alt"
      :class="{ 'block mx-auto': !!maxWidth }"
      :style="!!this.maxWidth ? `max-width: ${this.maxWidth}` : ''"
    />
    <div v-if="caption" class="text-center font-semibold text-sm my-2">
      {{ caption }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: String,
    alt: String,
    caption: String,
    maxWidth: String,
  },
  computed: {
    fullpath(): string {
      return require(`../../assets/images/${this.src}`)
    },
  },
})
</script>
```

To use it, simply call the components inside the Markdown.

```html
<v-img src="link-to-image.jpg" alt="alt-text"></v-img>
```

Note that we need to close the tag or else the rest of the content under the component will be treated as `slot` prop and passed inside `v-img` component. Since `v-img` does not handle slot, all of the contents passed in are simply discarded and will not show to the screen. Hence it is imperative for you to close any tags used inside the Markdown file.

The components cannot be self-closed and using it will not work. Using `image` HTML tag and markdown as mention above will not work either.

```md
// not working
<v-img src="..." alt="..." />

// not working
![alt-text](link-to-image.jpg)

// not working
<image src="link-to-image.jpg" alt="alt-text">
```

## Generating static page issues

If you are planning to ship your blog as a SSG or a static website, you should not use the async `fetch` method in any of the components. This is because that statically generated html does not **"technically"** handled by client-side JavaScript anymore hence unable to call the API.

When running `nuxt generate`, you will see warnings such as

```
WARN  Cannot stringify a function data

WARN  Cannot stringify a function render

WARN  Cannot stringify a function created

WARN  Cannot stringify a function VueComponent
```

and errors like

```
RangeError
Maximum call stack size exceeded
node_modules/@nuxt/devalue/dist/devalue.cjs.js:207:20
stringifyPrimitive
node_modules/@nuxt/devalue/dist/devalue.cjs.js:92:20
stringify
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:98
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:49
stringify
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:98
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:49
stringify
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:98
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:49
stringify
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:98
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:49
stringify
node_modules/@nuxt/devalue/dist/devalue.cjs.js:129:98
```

if you are using `fetch` in any of your component which ultimately leads to failure to generate the pages of the project.

## Conclusion

In this article, we have covered a lot and it would be enough to kickstart your blog project with Nuxt Content. We have discussed on installing dependencies, setting up program structure, creating a simple blog page, accessing the metadata, styling content, creating table of contents, working with Nuxt Content API, adding Prism theme, creating custom component for image. A big shoutout to the Nuxt team for providing such an amazing module to work with.

## Future updates

- Adding hyperlink icon to headers
- Adding search feature
- Adding SEO

## References

[Nuxt Content](https://content.nuxtjs.org/)
[Creating a blog with Nuxt Content](https://gilberttanner.com/blog/creating-a-blog-with-nuxt-content)
[Creating a blog with Nuxt Content](https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content)
[Create blog with Nuxt Content and i18n](https://studioterabyte.nl/en/blog/nuxt-content-i18n)
