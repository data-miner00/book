---
title: Storytelling with Storybook
subtitle: A brief introduction to Storybook and it's competency in front-end development
topic: Web Development
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - storybook
  - components
  - documentation
directory: web-dev
updatedAt: 2022-08-13T15:20:27.829Z
createdAt: 2022-08-13T15:20:27.829Z
---

As a front-end developer, most of the time we will be dealing with a lot of screens and components within a project. However, one of the challenge that developers face is communication between the team and the stakeholders. Storybook improves communication through documenting and visualize the UI component to everyone. This ensures that everyone involved in the project are on the same page.

"Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation," a direct quote from Storybook's official website. It is popular for creating a well-documented design system. It is being use by renowned mncs such as [Audi](https://react.ui.audi/), [Toptal](https://picasso.toptal.net/?path=/story/picasso-introduction--introduction) and [Grafana](https://developers.grafana.com/ui/latest/index.html?path=/story/docs-overview-intro--page). The project was started back on 2016 and is still actively maintained by [Chromatic](https://www.chromatic.com/) team and the community.

Storybook is **framework agnostic**. It can be integrated to any of the popular front-end framework such as Vue, Angular and React seamlessly.

Storybook advocates [component-driven methodology](https://www.componentdriven.org/) when developing UI components so that the components are modular and reusable throughout the entire application.

## Features

### Component Visualization

Storybook provides an **isolated environment** for us to develop, test and explore components without having to worry about fetching data from API or business logics.

The component that are being selected can be showcased individually without distractions within the canvas that Storybook offers. The image below are an example screen of the component showcase.

<v-img src="intro-to-storybook/component-in-storybook.png" src="Component showcase" border></v-img>

This eliminates the tedious process of loading everything up just to make sure that one single component is working as expected. As you may imagine, this drastically improves the efficiency and saves a lot of time.

### Automated Documentation

Documentation are crucial in development as it conveys the entire application as words that are easily understandable to other potential users. With Storybook, the process for documenting the application are much more easier and quicker.

To write an entire page of documentation that contains general information, it can be done by creating a **Markdown React** file anywhere within the `src` folder. The file created will need to end with `.stories.mdx` extension.

The image belows are an example of general documentation page in Storybook.

<v-img src="intro-to-storybook/general-docs.png" alt="General documentation" border></v-img>

> Markdown supports basic HTML too and this flexibility allows users to style their docs with aesthetics that fits their brand.

Component documentation are auto-generated based on docstrings for the component props. It can be accessed through the "Docs" tab in the component page.

<v-img src="intro-to-storybook/component-docs.png" alt="Component documentation" border></v-img>

The example above shows the documentation of the `Button` component and its prop declaration looks like this:

```tsx[Button.tsx]
type ButtonProps = {
  /* Is this the principal call to action on the page? */
  primary?: boolean;
  /* Button content */
  label: string;
  /* The background color for the button if not primary */
  backgroundColor?: string;
  /* How large the button should be? */
  size: "small" | "medium" | "large";
  // ... the rest of props
}
```

### Rich Integrations/Addons

<v-img src="intro-to-storybook/storybook-addons.png" alt="Storybook addons"></v-img>

There are a myriad of different addons that can be integrated with Storybook. These different addons offers a flexible choice for the user to choose the workflows that suits them well.

Some of the popular addons including but not limited to [Links](https://storybook.js.org/addons/@storybook/addon-links), [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y), [Chromatic](https://storybook.js.org/addons/chromatic) and [Interaction](https://storybook.js.org/addons/@storybook/addon-interactions/). More useful addons can be found on the official website [here](https://storybook.js.org/addons).

### Testing

The simplest testing method is to spot check the components before and after to see if there are any discrepancies with the intended behavior. Automating the test are possible as Storybook offers [visual tests](https://storybook.js.org/docs/react/writing-tests/visual-testing) that snapshot each of the component pixel by pixel. If changes are detected, it will show where the changes are. If the changes are intended, we can accept the new changes as the baseline that is used for comparison for the next test run.

Storybook can also test the behaviour of the components such as events and state. It also provides the option to test for accessibility compliance through the accesibility addon provided by the Storybook team.

## Storybook User Interface

There are 3 parts that made up of the UI for Storybook, namely **sidebar**, **action bar** and the **control panel**.

The sidebar consists of links and folders to each individual component stories and Markdown documentations. The action bar on the other hand provides controls such as zooming in and out, setting background color, fullscreen etc.

### Control Panel

The control panel contains all the available controls for the value of the component. Storybook will use the default widget for each of the suitable variable types of the component. Through the widgets provided, users can make quick changes on the props and the changes will be **reflected immediately** on the canvas.

There are a number of types of the controls built into Storybook.

| Data types | Available Control | Description                                                                            |
| ---------- | ----------------- | -------------------------------------------------------------------------------------- |
| boolean    | boolean           | Provide a switch to toggle on and off                                                  |
| number     | number            | Provide an input box for numbers only, optionally with minimum, maximum and steps set. |
|            | range             | Provide a slider component that includes all possible numbers                          |
| object     | object            | Provides an input that accepts the object as JSON string                               |
| array      | object            | Provides an input that accepts the array as JSON string.                               |
|            | file              | Provides a file input component that can accept multiple file as URLs                  |
| enum       | radio             | Provides radio buttons for different values in multiple linespan                       |
|            | inline-radio      | Provides radio buttons for different values in single line                             |
|            | check             | Provides a set of checkbox for different values in multiple linespan                   |
|            | check-inline      | Provides a set of checkbox for different values in single line                         |
|            | select            | Provides a dropdown list to select from                                                |
|            | multiple-select   | Provides a dropdown list to select multiple values                                     |
| string     | text              | Provides an input field for string                                                     |
|            | color             | Provides a color picker                                                                |
|            | data              | Provides a date selector                                                               |

## How to use Storybook

This following section will be using React and TypeScript for the quick demo. The concept applies across all the other framework with slightly different syntaxes.

### Default Export

Every storybook files starts with a default export of an object. The object contains all the necessary information to depict and describe the story file. The `title` is the component's name that will be displayed in Storybook. The `component` takes in the actual component itself for rendering.

Let's say you have a _"Button"_ component inside `Button.tsx`, create a new story file named `Button.stories.tsx` with the contents below.

```tsx[Button.stories.tsx]
import { ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;
```

### Creating Variants

To create a story for the `Button`, you need to export it individually with the props applied to the `Button` as such:

```tsx[Button.stories.tsx]
// Default styled button
export const Default = () => <Button label="Click me" />;

// Primary styled button
export const Primary = () => <Button label="Click me" primary />
```

The props for the component are not customizable at the moment. To make it customizable, create a reusable `Template` and assign `args` to each of the variants.

```tsx[Button.stories.tsx]
import { ComponentStory } from "@storybook/react";

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
	label: "Click me",
};

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
	label: "Click me",
	primary: true,
};
```

## Customizing Themes

Storybook are available for customization based on the addon.

```
yarn add --dev @storybook/addons @storybook/theming
```

To create a simple theme, go to the `.storybook` directory and create a new Javascript file and give it a name for the theme.

```js[.storybook/YourTheme.js]
import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self',
});
```

The theme will

- use light theme by default
- Replace storybook logo with own logo image
- Add custom brand info
- Set the logo url

Import the theme into the `manager.js` to apply the theme.

```js[.storybook/manager.js]
import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});
```

Read more on theming [here](https://storybook.js.org/docs/react/configure/theming).

## Summary

In a nutshell, Storybook is extremely helpful when it comes to front-end development. It is used for isolating components for visualization and development. It is also a great tool to produce top-notch documentation of a project. There are a lot of addons available that can be integrated with Storybook to extend its capability that make it more useful.

## Links and Reference

- [Storybook website](https://storybook.js.org/)
- [Storybook Github](https://github.com/storybookjs/storybook)
- [Storybook Twitter](https://twitter.com/storybookjs)
- [9 Most Useful Storybook Addons and Features Through Examples](https://betterprogramming.pub/most-useful-storybook-addons-and-features-in-examples-f751ed8ffbc)
- [Storybook JS – master components with this frontend tool](https://tsh.io/blog/storybook-js/)
- [How to simplify component testing with React Storybook](https://blog.logrocket.com/how-to-simplify-component-testing-react-storybook/)
- [Storybook React: A Beginner's Tutorial to UI Components](https://snipcart.com/blog/storybook-react-tutorial-example)
- [Component Driven User Interface](https://www.componentdriven.org/)
- [React Storybook Crash Course](https://www.youtube.com/watch?v=FUKpWgRyPlU)
- [Build and Document React Components With Storybook](https://www.youtube.com/watch?v=lWk5SntifCU)
- [Storybook in 100 Seconds](https://www.youtube.com/watch?v=gdlTFPebzAU)
- [Using Storybook stories with Testing Library](https://www.youtube.com/watch?v=k6NG96awIJ0)
