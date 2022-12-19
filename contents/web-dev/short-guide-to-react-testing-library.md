---
title: Short guide to React testing library
subtitle: Tips and tricks for the common use cases with the @testing-library/react library
topic: Programming
displayTopic: Web Development
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - technology
  - react
  - testing
directory: web-dev
updatedAt: 2022-11-07T14:25:33.879Z
createdAt: 2021-12-27T13:33:30.485Z
---

Testing can be **intimidating** especially for beginners in software development like me years ago. I tried to avoid writing tests whenever I can to spare myself some mercy. However, writing efficient tests can improve the software quality and the confidence as well, which in turn improve user satisfaction over the well engineered software features without any unexpected behavior.

In this article, we will be taking a look on the testing library for React which literally called `@testing-library/react` that can be npm installed.

## Simple test

Below is a sample test of how the code looks like. `@testing-library/react` uses [Jest](https://jestjs.io/) under the hood to perform tests.

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
```

## Element selectors

There are two kinds of selector in this testing library, namely single target or multiple target selectors.

The selectors can also be grouped into 3 main categories. Each have different properties and usage which will be summarized in the table below.

|           | `getBy` | `findBy` | `queryBy` | `getAllBy` | `findAllBy` | `queryAllBy` |
| --------- | ------- | -------- | --------- | ---------- | ----------- | ------------ |
| No match  | error   | error    | null      | error      | error       | array        |
| 1 match   | return  | return   | return    | array      | array       | array        |
| 1+ match  | error   | error    | error     | array      | array       | array        |
| Awaitable | no      | yes      | no        | no         | yes         | no           |

## Query Accessibility

In theory when writing tests, we have to stay as close to user perspective to test the underlying behaviours without any blindspot that might have been missed while developing.

There are a plethora of query methods in React testing library and we won't be covering all of them here but if you are interested, please have a look on the [official documentation](https://testing-library.com/docs/react-testing-library/cheatsheet#queries).

Below are a few examples that are grouped according to their accessibility:

- Accessible by everyone
  - `getByRole`
  - `getByLabelText`
  - `getByPlaceholderText`
  - `getByText`
- Semantic queries (for screen reader)
  - `getByAltText`
  - `getByTitle`
- Self-defined Test ID
  - `getByTestId`

Here we are using getBy for illustration and is also applicable for the `findBy` and `queryBy` variant as well.

The test id is a custom property created for elements that are impossible to obtained by any other query methods due to complexity and ambiguity. It is the last resort to query the elements and avoid using it if the elements is accessible by other methods.

It is recommended to use queries that are more close to user interaction and accessibility.

## Unit tests

This section will illustrate the common use cases for unit testing with React testing library labelled by its scenario.

### Passing props to a component

```tsx
it('renders same text pass in props', async () => {
  render(<Header title="My Header" />)
  const headingElement = screen.getByText(/my header/i)
  expect(headingElement).toBeInTheDocument()
})
```

### Get element by its role

```tsx
it('renders same text pass in role', async () => {
  render(<Header title="My Header" />)
  const headingElement = screen.getByRole('heading')
  expect(headingElement).toBeInTheDocument()
})
```

### Get element by role and text

Lets say there is 2 heading role element in the component. We can get specifically of one of them by specifying their name (which is their text)

```tsx
it('renders same text pass in role', async () => {
  render(<Header title="My Header" />)
  const headingElement = screen.getByRole('heading', { name: 'My Header' })
  expect(headingElement).toBeInTheDocument()
})
```

### By Test ID

```tsx
// component under test
return <h1 data-testid="hello">Hello</h1>
```

```tsx
it('renders same text pass in role', async () => {
  render(<Header title="My Header" />)
  const headingElement = screen.getByTestId('hello')
  expect(headingElement).toBeInTheDocument()
})
```

### Using find by

As the operation is asynchronous, it needs `await` and `async` keyword to work.

```tsx
it('renders same text pass in role', async () => {
  render(<Header title="My Header" />)
  const headingElement = await screen.findByTestId('hello')
  expect(headingElement).toBeInTheDocument()
})
```

### Assert not

```tsx
it('renders same text pass in props', async () => {
  render(<Header />)
  const headingElement = screen.getByText(/dogs/i)
  expect(headingElement).not.toBeInTheDocument()
})
```

### Test involving Link and Router

```tsx
// component
return <Link to="/link">Link</Link>
```

```tsx
import { MemoryRouter } from 'react-router-dom'

const MockComponent = ({ someProp }) => (
  <MemoryRouter>
    <Component someProp={someProp} />
  </MemoryRouter>
)

it('should render with Link and prop', () => {
  render(<MockComponent someProp={4} />)
  const paragraphElement = screen.getByText(/fs/i)

  expect(paragraphElement).toBeInTheDocument()
})
```

### Assert visible

```tsx
// css opacity can affect this
expect(paragraphElement).toBeVisible()
```

### To contain HTML tag

```tsx
// to contain p tag
expect(paragraphElement).toContainHTML('p')
```

### To have text content

```tsx
expect(paragraphElement).toHaveTextContent('the text to assert')
```

More matchers can be found on [Jest's documentation](https://jestjs.io/docs/using-matchers)

## Firing events

Trigerring DOM events manually can be invaluable for testing as well as it mimic how the user interacts with the web application.

### Check input

```tsx
import { fireEvent } from '@testing-library/react'

const mockedSetTodo = jest.fn()

describe('AddInput', () => {
  it('should be able to type in input', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)

    fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })

    expect(inputElement.value).toBe('Go grocery shopping')
  })
})
```

### Reset input onclick

Sets the input to empty string when button is clicked.

```tsx
it('should have empty input when add button is clicked', async () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />)

  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })

  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })

  fireEvent.click(buttonElement)
  expect(inputElement.value).toBe('')
})
```

## Integration test

Tests that involve 2 or more components.

```tsx
it('should render same text passed into title prop', () => {
  render(<MockTodo />)
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })

  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })

  fireEvent.click(buttonElement)

  const divElement = screen.getByText(/Go grocery shopping/i)
  expect(divElement).toBeInTheDocument()
})
```

```tsx
it('should render multiple elements', () => {
  render(<MockTodo />)
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })

  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })
  fireEvent.click(buttonElement)
  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })
  fireEvent.click(buttonElement)
  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })
  fireEvent.click(buttonElement)

  const divElements = screen.getAllByText(/Go grocery shopping/i)
  expect(divElements.length).toBe(3)
})
```

```tsx
it('should not have completed class when initially rendered', () => {
  render(<MockTodo />)
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /Add/i })

  fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } })

  fireEvent.click(buttonElement)

  const divElement = screen.getByText(/Go grocery shopping/i)
  expect(divElement).not.toHaveClass('todo-item-active')
})
```

## Mocks

Mocks can be created in a `__mock__` directory in root.

```tsx[axios.js]
const mockResponse = {
  data: {
    results: [
      // ...
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(),
}
```

## Conclusion

In this articles, we've seen how the tests looks like using `@testing-library/react` to test a React application, differences between kinds and types of selectors available and a few example unit tests and integration tests.
