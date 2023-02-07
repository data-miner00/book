---
title: List of React Hooks
subtitle: The explanation and sample use cases for most of the built-in React Hooks.
topic: React
displayTopic: Web Development
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - technology
  - react
directory: web-dev
updatedAt: 2023-01-10T13:54:21.745Z
createdAt: 2023-01-10T13:54:21.745Z
---

React hooks are a set of powerful JavaScript functions that is used to abstract out reusable parts of the code into a clean API that we can interact with inside a Functional Component. There are a myriad of built-in hooks in React that covers most of the use case while developing with React.

## useState

`useState` is a hook that stores a piece of data, or state that can be changed later in the application. It returns the reference to the current value of its state as well as a mutation function to update the value of the state.

```tsx
const [value, setValue] = useState<string>('')
```

## useReducer

`useReducer` is a more complex version of `useState` that allows multiple states to be grouped and managed within isolation.

For example, the code below shows that the `onClick` event listener will call `setCount` and `setShowText` when it is fired. We could potentially group them together under a single state.

```tsx
return (
  <button
    onClick={() => {
      setCount(count + 1)
      setShowText(!showText)
    }}
  >
    Click Me
  </button>
)
```

First, we will need to define our custome reducer function that handles all of the possible mutation. The reducer takes in two parameters, a `state` and an `action`. The `action` is an object that contains the event type and optionally the payload of the event. Based on the `action.type` provided, the intended value will be updated accordingly.

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'toggleShowText':
      return { ...state, showText: !state.showText }
    default:
      return state
  }
}
```

The `state` can also be initialized to any object in the parameter as the initial state for the reducer.

```tsx
function reducer(
  state = {
    count: 5,
    showText: false,
  },
  action
) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'toggleShowText':
      return { ...state, showText: !state.showText }
    default:
      return state
  }
}
```

The data within the state can be extracted out with the `useReducer` hook as shown below. The first parameter it takes is a reducer function that has just been defined earlier and the second parameter is the object that contains the initial states.

It returns the `state` object that contains all the updated values as well as a `dispatch` function to fire off an event.

```tsx
const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
```

To fire off an event, simply use the `dispatch` function and provide it with an object with the aforementioned `type` property that matches to the switch cases.

```tsx
return (
  <h1
    onClick={() => {
      dispatch({ type: 'INCREMENT' })
      dispatch({ type: 'toggleShowText' })
    }}
  >
    {state.count}
  </h1>
)
```

## useEffect

`useEffect` is one of the most common hooks that is almost part and parcel to every React applications. It is used to run some codes whenever a specified state dependencies had changed.

```tsx
const [hello, setHello] = useState('Hello!')

useEffect(() => {
  // codes to be executed when the value of `hello` has changed
}, [hello]) // depends on `hello`
```

If an empty array (no dependencies) were provided, it will only run once during render. This is equivalent to the `componentDidMount` lifecycle hook in the class component.

```tsx
useEffect(() => {
  // codes to be executed when render
}, [])
```

If no array whatsoever was provided to `useEffect`, it will be triggered each time the component updates, each time any of the component state was changed. This is equivalent to `componentDidUpdate` hook in class component.

```tsx
useEffect(() => {
  // codes to be executed on update
})
```

> Note: This hook is called only after element is rendered. To execute the hook before render, see [useLayoutEffect](#uselayouteffect).

## useRef

`useRef` is used to make a reference to the DOM element. It returns an object with `current` property that points to the found instance in the DOM tree. This allows a more low level access to DOM elements that can be used to focus an input element, manage `classList` imperatively, get input values without hooking to a state just to name a few.

To create a reference to a DOM node, create an assignment of `useRef` to a variable and assign that variable to any of the DOM elements with `ref` props within the JSX.

```tsx
const elementRef = useRef()

return <input ref={elementRef} />
```

After that, we can access the element by using `elementRef.current` and perform DOM operations as such.

```tsx
const value = elementRef.current.value // Get the input value if any
elementRef.current.focus() // Focus on the element
```

## useLayoutEffect

Just like `useEffect`, but called before `useEffect`. Commonly used for pre fetching API or calculating window height or width for dynamic display of elements. It is equivalent to `componentWillMount` lifecycle hook.

```tsx
useLayoutEffect(() => {
  // code to run before useEffect
}, [])
```

## useImperativeHandle

Expose the children's API to its parent. It can be used for mutating the child's state without state lifting. It is used together with `forwardRef`.

```tsx[parent.tsx]
const Parent = () => {
	const ref = useRef(null);

	return (
		<div>
			<button onClick={() => ref.current.alterToggle()}
			<BigButton ref={ref} />
		</div>
	)
}
```

The `BigButton` implementation below uses `useImperativeHandle` and `forwardRef` to expose the `alterToggle` method to its parent.

```tsx[child.tsx]
const BigButton = forwardRef((props, ref) => {
	const [toggle, setToggle] = useState(false);
	useImperativeHandle(ref, () => ({
		alterToggle() {
			setToggle(!toggle)
		}
	}))
	return (
		<button
			className="big"
			onClick={() => {
				setToggle(!toggle)
			}}
		>
			Button from child
		</button>
		{toggle && <span>Toggle</span>}
	)
})
```

## useContext

`useContext` is used to connect 'Context' to a component. Different context have different states, methods, hooks that can be shared and inherited when being used. To create a context, start with `React.createContext` method. Consider the following,

```ts
interface ProviderProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  someFunction: Function
}

// Creating context
const AppContext = React.createContext<ProviderProps>({} as ProviderProps)
```

Each context also will have a provider. The provider is a wrapper component that encapsulates all the context logic that can be shared to any child components that requested data from it. Context provider is defined this way.

```tsx
interface Props {
  children: React.ReactNode
}

function AppContextProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log('Hello Im loaded!')
  }, [])

  function someFunction() {
    // do whatever
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        someFunction,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
```

Next, wrap the context provider in a level high enough to reach the demanding component. For global context, we usually wraps the entire application for the context to be accessed anywhere.

```tsx[index.tsx]
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContextProvider>
	</React.StrictMode>
);
```

Now the context is ready to be consumed by any of the components by doing the following.

```tsx[AnyComponent.tsx]
// import the AppContext, not the AppContextProvider
function AnyComponent() {
	const { isOpen, setIsOpen, someFunction } = useContext(AppContext);

	// use isOpen, setIsOpen and someFunction freely
}
```

## useMemo

Returns an memoized value against a computational intensive function for performance gains. Lets say the `findLongestName` function is expensive, it can be memoized and not recomputed until its target dependency inside the dependencies array change.

```tsx
const getLongestName = useMemo(() => findLongestName(data), [data])
```

## useCallback

Similar to `useMemo`, but memoize function instead. Consider the following. The `getString` is an arrow function that returns a constant string value. The `useEffect` is taking the function instance as a dependency.

```tsx
const getString = () => 'hello'

useEffect(() => {
  console.log('haha')
}, [getString])

return <div></div>
```

Theoritically, the `useEffect` hook should only be triggered once because the `getString` function never changes. However, that's not normally the case. If the component have some reactive state and a rerender is triggered, the `const getString` gets a brand new `() => "hello"` instance instead of always pointing to the same instance in the memory.

To prevent such behaviour, `useCallback` can help to locate the only instance of the function until the dependency array has been mutated.

```tsx
const getString = useCallback(() => 'hello', [])
```

## References

- [Hooks Reference - React](https://reactjs.org/docs/hooks-reference.html)
- [React Hooks Fundamentals](https://www.freecodecamp.org/news/react-hooks-fundamentals/)
- [Cheatsheets - Lifecycle Methods](https://www.codecademy.com/learn/react-101/modules/react-102-lifecycle-methods-u/cheatsheet)
