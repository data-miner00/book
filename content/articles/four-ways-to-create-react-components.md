---
title: Four ways to create React components
subtitle: Get to know the best ways to create React components for your project
topic: React
displayTopic: Technology
author:
  name: Shaun Chong
  avatar: mumk.jpg
tags:
  - react
---

When working with React applications, there are a number of ways to create reusable components that can be applied throughout the application. 

## createClass

This is an older approach to create a component. I personally didn't know about this way of creating a component until I came across the [React and Redux course](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents) on [Pluralsight](https://www.pluralsight.com/) by Cory House and this article was inspired by it as well. 

```jsx
var RandomComponent = React.createClass({
	render: function() {
		return (
			<h1>JSX here</h1>
		);
	},
});
```

## Class

A slightly advance approach than `createClass` but is still considered old. 

```jsx
class RandomComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<h1>JSX here</h1>
		);
	}
}
```

## Function

A better approach than the class counterpart

```jsx
function RandomComponent(props) {
	return (
		<h1>Hello World</h1>
	);
}
```

## Arrow function

Arrow function has becoming the de facto standard for creating a component in newer versions of React compared to the pure function component. As arrow function is considered a statement, we(for semicolon users in JavaScript) need to append semicolon as well at the end of the expression.

```jsx
const RandomComponent = () => {
	return (
		<h1>JSX here</h1>
	);
};
```

With arrow function's syntax, we can make it a one-liner if it is just returning the JSX.

```jsx
const RandomComponent = () => <h1>JSX here</h1>;
```

## Which one?

_Functional component_ are **more beneficial** as it is:
- having a more succinct syntax that is easier to understand
- eliminates the headache to deal with the `this` keyword in classes and function binding
- class components are more verbose than functional components
- the transpiled code by babel for class component are also significantly larger compared to that of functional component
- this leads to smaller bundle and better performance
- destructuring props in functional component are easier and clear
- functional component are easier to test
- class component may soon be deprecated

## Use Cases

With React version earlier than 16.8, functional components are not well suited for all use-cases yet; they still lack of some feature. If we want to use state, `refs` and lifecycle hooks such as `componentDidMount` etc., we will need to use class components. Nowadays, the sole necessary use case for class components is when we need `componentDidError`, `getSnapshotBeforeUpdate` in the component.

As a sidenote, functional component was previously used as a read-only component where not much logics are going on behind the scenes. 

## Conclusion

To conclude, use Functional component whenever possible while developing a modern React application and use Class component only in the niche situation as mentioned above.

However, you still can use Class component if thats your personal preference, and thats totally fine. Just has to beware of some pitholes and performance issues it might introduce to the application. 


https://ultimatecourses.com/blog/react-create-class-versus-component