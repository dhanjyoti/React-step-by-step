# 1. Class Components
-> In react, Class Components are basically ES6 classes. Similar to functional components, a class component can also optionally receive props as input and return HTML. Apart from the props a class component can also maintain a private internal state. In simpler words, it can maintain some information which is private to that component and use that information to describe the user interface.

# 2 Functional components Vs Class components
**functional components ->**
    1. functional components are simple functions receiving props and returning a declaration.
    2. first, it has an advantage that funcitonal components do not use `this` keyword.
        Secondly, in class component we will be forced to think of a solution without having to use state, if we have a number of components each with their own private state maintainance and debugging our application is difficult.
            Functional components tend to be without any complicated logic and are mainly responsible for the user interface. 

**class components ->**
    1. class components are feature-rich, they can maintain their own private data also called as state.
    2. they can contain complicated UI logic and most importantly they provide lifecycle hooks.
    3. because of what they are capable of and how they are used class components are also called as stateful components, smart components or container components.

# 3. Hooks
-> Hooks are a kind of function which helps us to resolve a particular problem. Hooks are a new feature addition in React version 16.8 which allow us to use React features without having to write a class. 


# 4. Lifecycle method
-> In a class based component, When we create a react component, the component goes through several stages in its lifecycle. React provides us with built-in methods that we can overwrite.
We can mainly classify the methods into four(4) phases -
        1. Mounting
        2. Updating
        3. Unmounting
        4. Error Handling

1. Mounting -> The mounting methods are called when an instance of a component is being created and inserted into the DOM. During the mounting phase we have four(4) methods again, i.e -> 
    * constructor
    * static getDerivedStateFromProps(props, state)
    * render
    * componentDidMount

2. Updating -> The updating methods are called when a component is being re-rendered as a result of changes to either its props or state. During the updating method we have five(5) methods again, i.e ->
    * static getDerivedStateFromProps(props, state)
    * shouldComponentUpdate(nextProps, nextState)
    * render
    * getSnapshotBeforeUpdate
    * componentDidUpdate

3. Unmounting -> The unmounting method is called when a component is being removed from the DOM. During unmounting we just have one(1) method.
    i.e -> componentWillUnmount

4. Error Handling -> The error handling method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component. During Error Handling we have two(2) methods,
i.e -> 
    * static getDerivedStateFromError
    * componentDidCatch

***1. Mounting Lifecycle Methods ->*** Methods which are called when an instance of a component is being created and inserted into the DOM. We will go through the order that they are invoked.
**constructor ->** It is a special function that will get called whenever a new component is created.
        Why we use it-
        - The constructor is perfect for initializing state or binding the event handlers to the class instance.
        What should not be done in a constructor -
        - we should not cause side effects -> eg- we should never make HTTP requests from within a constructor.

        There are two important points to keep in mind when it comes to defining our own constructor -
    1. we need to call a special function called `super`, this will call the base class constructor. In our component we have access to `this.props` only after we have initially called `super` passing in the props as an argument.
    2. constructor is the only place where we are expected to change or set the state by directly overwriting this.state fields, in all other scenarios we have to use this.setState as a constructor set initial state find event handlers and don't cause any side effects like making Ajax calls(http requests) for example.
    
**static getDerivedStateFromProps ->** this method is basically used when the state of the component depends on changes in props over time, the react documentation classifies this method as a rarely used lifecycle method.
    Eg- we have a component but the initial state of the component depends on the props being passed to the component. In such a scenario we can use this method to set the state.
    Since this method is a static method(A static method can be called directly from the class, without having to create an instance of the class) it does not have access to the `this` keyword, so we cannot call `this.setState` within this method, instead we simply have to return an object that represents the new state of the component from the props.
    Not to do -
    we should not cause side effects. Eg - fetching data from an endpoint.
So getDerivedStateFromProps is used - when state depends on changes in props over time and also did not cause any side effects.

**render() ->** The render method is the only `required` method in a class component. In the render method we simply read `this.props` and `this.state` and return the JSX which describes the UI. The render function is a pure function, for a given state it should always render the same UI.
    Not to do -
    we should not change the state of the component or interacting with the Dom or making any Ajax calls. 
Since it is the render method, JSX which also contains the other children component right after the parent render method the children components lifecycle methods are also executed. So render method read props in state and return the JSX.

**componentDidMount ->** this method will be called only once in the whole lifecycle of a given component and it is invoked immediately after a component and all its children components have been rendered to the DOM.
    Usages - this method is the perfect place to cause side-effects, eg- we can interact with the DOM or perform any Ajax calls to load data. So componentDidMount is a good place to perform initialization that requires DOM nodes and also load data by making Network requests.
```jsx
    import React, {Component} from 'react';
    class Lifecycle extends Component{
        constructor(props){
            super(props)
            this.state = {
                name:"dhan"
            }
            console.log("Lifecycle constructor")
        }
        static getDerivedStateFromProps(props, state){
            console.log("Lifecycle getDerivedStateFromProps")
            return null;
        }

        componentDidMount(){
            console.log('Lifecycle componentDidMount');
        }
        render(){
            console.log('Lifecycle rendered')
            return (
                <div>Lifecycle</div>
            )
        }
    }
    export default Lifecycle;
```
**Output**
- Lifecycle constructor
- Lifecycle getDerivedStateFromProps
- Lifecycle rendered
- Lifecycle componentDidMount

***Updating Lifecycle Methods ->*** methods that are called when a component is being re-rendered because of changes to either props or state. We will go in the order they are invoked.
- Here we have a total of 5 methods, but three fall into the category of rarely used methods.
**static getDerivedStateFromProps ->** this is a static method which receives props and state as its parameter and has to return either null or an object that represents the updated state of the component. This method is called everytime a component is re-rendered & this method is used when the state depends on the props of the component.
- Not to do
We should not cause any side effects in `getDerivedStateFromProps`.

- this method is one of the most rarely used methods in the updating phase.

**shouldComponentUpdate ->** this method receives the updated props and state and the purpose of this method is clear from its name, it dictates if at all the component should re-render or not.
By Default all class components will re-render whenever the props they receive or their state changes. This method can prevent that default behavior by returning `false`. What we do in this method is compare the existing props and state values with the next props and state values and return true or false to let react know whether the component should update or not. So this method is basically for performance optimization.
- Not to do 
we should avoid causing any side effects or calling the setState method.
This is also considered rarely used lifecycle method.

**render method ->** in this method we read `this.props` and `this.state` and return the JSX which describes the UI.
- Not to do
avoid changing the state or interacting with the Dom in the render method.

**getSnapshotBeforeUpdate(prevProps, prevState) ->** this method accepts previous props and previous state as its parameters and is called right before the changes from the Virtual Dom are to be reflected in the Dom.
We use this method to capture some information from the Dom, eg-> we can read the users scroll position and after the update maintain that scroll position by performing some calculations. This method will either return `null` or return a value, the returned will be passed as the third parameter to the next method i.e - componentDidUpdate
This is also a rarely used method.

**componentDidUpdate ->** this method will be called after the render is finished in the re-render cycles. This means that we can be sure that the component and all its sub-components have properly rendered itself after the update. It has 3 parameters-> previous props, previous state and the snapshot value that returned from `getSnapshotBeforeUpdate` method. 
This method is guaranteed to be called only once in each re-render cycle, so we can cause side effects here, i.e - we can make Ajax calls. But before making the compare we need to compare the previous props with the new props and then decide whether to make the Ajax call or not. If we are not comparing we are making unwanted requests, which is not a good idea.

```jsx
    import React, {Component} from 'react;
    class Lifecycle extends Component{
        constructor(props){
            super(props)
            this.state = {
                name:"dhan"
            }
            console.log("Lifecycle constructor")
        }
        static getDerivedStateFromProps(props, state){
            console.log("Lifecycle getDerivedStateFromProps")
            return null;
        }

        componentDidMount(){
            console.log('Lifecycle componentDidMount');
        }
        shouldComponentUpdate(){
            console.log('Lifecycle shouldComponentUpdate')
            return true;
        }
        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log('Lifecycle getSnapshotBeforeUpdate')
            return null
        }
        componentDidUpdate(){
            conosle.log("Lifecycle componentDidUpdate")
        }
        changeState =()=>{
            this.setState({
                name: "dhanjyoti"
            })
        }
        render(){
            return() (
                concole.log('Lifecycle rendered')
                <div>Lifecycle</div>
                <button onClick={this.changeState}>Change State</button>
            )
        }
    }
    export default Lifecycle;
```
**Unmounting Method ->** it has just one method `componentWillUnmount()` - this method is invoked immediately before a component is unmounted and destroyed. In this method we can perform some cleanup tasks like cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers from setTimeout or setInterval.
- Not to do
not to call the setState method. Simply because the component is never re-renders after it has been unmounted.

**Error Handling Methods ->** this phase has 2 methods - static getDerivedStateFromError(error) & componentDidCatch(error, info). These two methods are called either during rendering, in a lifecycle method, or in the constructor of any child component.

***this topic will continue with error boundaries***

***Error Boundary***
In a class component that implements either one or both of the lifecycle methods i.e, getDerivedStateFromError or componentDidCatch becomes an `error boundary`.

The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

Error Boundaries will catch the error and display a fallback UI. This is done through `getDerivedStateFromError`.

`componentDidCatch` takes two parameters - error & info, which is information related to the error and this method is preety much to log the errors.

**Summary:**
Error boundaries are React components that catch Javascript error in their child component tree, log those errors, and display a fall-back UI.

A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.

The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.

Provide a way to gracefully handle error in application code.





# What is React Router?
-> It is a fully-featured client and server-side routing library for React. This library helps create and navigate between different URLs that make up our web application. It also provides unique URLs for different components in the app and makes the UI easily shareable with other users. If we are building a medium too large scale react app, react router is a must have package.

# 1. What is react router dom in react js ?
- React Router is a popular routing library for React applications. It allows us to handle navigation and rendering different components based on the URL in single-page application (SPA). React Router provides a declarative way to define application's routes and their corresponding components.

`react-router-dom` is a package that provides DOM bindings for React Router. It's commonly used in web applications to define routes and navigation elements. This package includes several components, such as `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, etc., which we can use to set up routing in our React application.

React Router helps in managing the application's URL, allowing users to navigate through different views or pages without causing a full page reload. It's widely used in React applications to create a smooth and intuitive user experience.
<!-- ____________________________________________________________________ -->

# Rendering
-> 

# 2. What is the render method in the class component?
- In a class component in React, the `render` method is a required method that defines what will be rendered or displayed by the component. It returns a React element, which describes what should be displayed on the screen.

```jsx
    import React, { Component } from 'react';

    class MyComponent extends Component {
    render() {
        return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a class component.</p>
        </div>
        );
    }
    }

    export default MyComponent;
```
***In this example:***
- MyComponent is a class component that extends Component from React.
- It contains a render method that returns a JSX element. The JSX describes the UI that should be rendered when an instance of MyComponent is used in the application.
- Inside the render method, we have a `<div>` element containing an `<h1>` element with the text "Hello, World!" and a `<p>` element with some additional text.
- When MyComponent is rendered in the application, the content returned by its render method will be displayed on the screen.

The `render` method is called whenever the state or props of the component change. React then compares the newly returned element from `render` with the previously rendered one, and if there are any differences, it updates the DOM to reflect those changes.
<!-- ____________________________________________________________________ -->

# ***3. What is the useReducer hook in react js ?***
- The `useReducer` hook is a built-in React hook that provides an alternative to the `useState` hook for managing complex state logic in functional components. It is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous one.

`useReducer` is inspired by the Redux library's reducer pattern and is similar to how reducers work in Redux. It accepts a reducer function and an initial state, and returns the current state and a dispatch function. The dispatch function is used to dispatch actions to update the state based on the logic defined in the reducer function.

```jsx
    import React, { useReducer } from 'react';

    // Reducer function
    const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
        return { count: state.count + 1 };
        case 'decrement':
        return { count: state.count - 1 };
        default:
        throw new Error();
    }
    };

    const Counter = () => {
    // Initialize state using useReducer
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
        <p>Count: {state.count}</p>
        {/* Dispatch actions to update state */}
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
    };

    export default Counter;
```
***In this example:***
- We define a reducer function (reducer) that takes the current state and an action as arguments and returns the new state based on the action.
- We initialize the state using useReducer, passing the reducer function and an initial state object { count: 0 }.
- We use the dispatch function returned by useReducer to dispatch actions ({ type: 'increment' } and { type: 'decrement' }) to update the state.
- The component renders the current count value (state.count) and two buttons to increment and decrement the count. When the buttons are clicked, the corresponding actions are dispatched to update the count value.
<!-- ____________________________________________________________________ -->

# 4.***What is useMemo and how it is used to stop the child re-rendering?***
- `useMemo` is a React hook used for memoization, which is a technique to optimize performance by memoizing the result of expensive function calls and reusing the memoized result if the inputs to the function haven't changed. It is particularly useful for avoiding unnecessary re-computation of values in functional components.

In React, when a component renders, all of its code gets executed, including any function calls or computations. If a function call within a component is expensive and its return value doesn't change between renders, it can lead to unnecessary re-computation and performance degradation.

`useMemo` solves this problem by memoizing the result of a function call and returning the memoized value on subsequent renders if the inputs to the function haven't changed.

```jsx
    import React, { useMemo } from 'react';
    import ChildComponent from './ChildComponent';

    const ParentComponent = () => {
    // Compute expensive value
    const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return <ChildComponent prop={expensiveValue} />;
    };

    export default ParentComponent;
```
***In this example:***
- We compute the expensiveValue using useMemo. It will only recompute the value when a or b changes.
- We pass expensiveValue as a prop to the ChildComponent. Since expensiveValue is memoized, ChildComponent will only re-render if expensiveValue changes, not on every render of ParentComponent.
<!-- ____________________________________________________________________ -->

# 5. What is componentDidUpdate() method?
- `componentDidUpdate` is a lifecycle method in React class components that gets called immediately after a component updates and after the DOM has been updated. It is invoked every time the component re-renders, including the initial render (though for the initial render, you'd generally use `componentDidMount`).

The `componentDidUpdate` method receives two parameters: `prevProps` and `prevState`, which are references to the component's props and state before the update, respectively. This allows you to compare the current props and state with the previous ones and perform side effects based on the changes.
<!-- ____________________________________________________________________ -->

# 6. What is useLocation hook ?
- The useLocation hook is a built-in React hook provided by React Router. It allows you to access the location object in functional components. The location object represents the current URL location in the browser.

The useLocation hook is particularly useful when you need to access information about the current URL location in functional components, such as determining which route is currently active or extracting query parameters from the URL.
<!-- ____________________________________________________________________ -->

# 7. What is state vs props?
**State:**
- Definition: State is a data structure that belongs to a component and is managed internally by the component itself.

- Mutable: State is mutable, meaning it can be updated within the component using the setState method.

- Local to Component: State is local to the component where it is defined, meaning it cannot be accessed or modified by other components.

- Component-specific: Each instance of a component has its own state, and changes to one component's state do not affect the state of other instances of the same component.

- Example: State is commonly used to manage data that changes over time within a component, such as user input, toggling UI elements, or maintaining the current state of a form.

**Props:**
- Definition: Props (short for properties) are a way to pass data from a parent component to a child component.

- Immutable: Props are immutable, meaning they cannot be modified by the child component. They are read-only.

- Passed Down: Props are passed down from parent to child component as attributes similar to HTML attributes.

- Component Interaction: Props enable communication between components in a React application, allowing data to flow from higher-level components to lower-level components.

- Example: Props are commonly used to customize or configure child components based on data from parent components. They allow for the reuse of components and facilitate component composition in React applications.
<!-- ____________________________________________________________________ -->

# 8. What is jsx?
- JSX stands for JavaScript XML. It is a syntax extension for JavaScript, often used with React, that allows us to write HTML-like code directly within JavaScript. JSX makes it easier to write and read React components by blending HTML and JavaScript together.

Using JSX directly is much more readable and maintainable compared to manually creating React elements using React.createElement. Therefore, JSX has become the standard way of writing React components.
<!-- ____________________________________________________________________ -->

# 9. What is React?
- React JS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is an open-source, component-based front-end library that is responsible only for the view layer of the application ReactJS is not a framework, it is just a library developed by Facebook.
<!-- ____________________________________________________________________ -->
# 10. What is virtul Dom ?
- In React.js, the Virtual DOM (Document Object Model) is a concept that refers to a lightweight copy of the actual DOM. The DOM represents the structure of a document as a tree of nodes, where each node represents an element, attribute, or text. Manipulating the DOM directly can be inefficient, especially when dealing with large and complex web applications.

React's Virtual DOM is an abstraction of the real DOM. When we make changes to our React application, instead of directly manipulating the actual DOM, React first updates the Virtual DOM. React then compares the updated Virtual DOM with the previous version of the Virtual DOM (or a snapshot of it) to determine the minimal set of changes needed to update the actual DOM. This process is known as "reconciliation."

Once React determines the difference between the previous Virtual DOM and the updated Virtual DOM, it applies only those necessary changes to the real DOM. By minimizing the number of actual DOM manipulations, React optimizes performance and ensures faster rendering of UI changes.

Virtual DOM Key Concepts :
* Virtual DOM is the virtual representation of Real DOM.
* React update the state changes in Virtual DOM first and then it syncs with Real DOM.
* Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
* Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation.
* Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions.

<!-- ____________________________________________________________________ -->

# Components
- Components are independent and reusable bits of code. They serve the same purpose as Javascript functions, but work in isolation and return HTML.

# 11. What is Types of Components?
- In React.js, components are the building blocks of user interfaces. They encapsulate reusable pieces of UI, allowing developers to create complex UIs efficiently. Components in React can be categorized into two main types: Functional Components and Class Components.
<!-- ____________________________________________________________________ -->

# 12. What is lifecycle methods in class base component?
- In React.js, class components (or stateful components) have a set of methods known as "lifecycle methods." These methods allow developers to hook into various points in the lifecycle of a component, from its creation to its removal from the DOM. By using lifecycle methods, developers can perform tasks such as setting up state, fetching data, responding to updates, and cleaning up resources.
<!-- ____________________________________________________________________ -->

# 13. What is Hooks in Functional component?
- In React.js, `Hooks` are functions that allow us to add state and other React features to functional components. Prior to hooks, state and lifecycle features were only available in class components. The introduction of hooks in React 16.8 revolutionized the way developers manage state and side effects in functional components. Hooks make it possible to reuse stateful logic without changing our component hierarchy.
<!-- ____________________________________________________________________ -->

# 14. What is control and uncontrol Components?
***Controlled Components:***
- In controlled components, the component's state is managed entirely by React. The state of the component is stored in the component's state (using this.state in class components or useState hook in functional components), and any updates to the state are handled by callbacks passed down from the parent component.
- Controlled components receive their current value via props and notify changes via callbacks. They don't hold their own state.
- When a user interacts with a controlled component (e.g., typing into an input field), React updates the state, which triggers a re-render of the component with the new state value.

***Uncontrolled Components:***
- In uncontrolled components, the component's state is managed by the DOM itself. The state is not stored in the component's state but is instead managed by the DOM (e.g., input value stored in the DOM).
- Uncontrolled components typically use refs to access the DOM nodes directly to read the current state.
- They are useful when integrating with non-React code or when we need a simpler approach for handling form inputs.

<!-- ____________________________________________________________________ -->

# 15. How we can create custom hook ?
- Creating custom hooks in React allows us to extract and reuse stateful logic across multiple components. Custom hooks are regular JavaScript functions prefixed with use, and they can call other hooks if needed. Here's how we can create a custom hook:

    * **Identify the Reusable Logic:**
    Determine the logic that we want to reuse across different components. This could involve managing state, performing side effects, or any other behavior that we find ourself repeating.

    * **Create a Function with use Prefix:**
    Define a function with the use prefix (e.g., useCustomHook). This naming convention is not mandatory, but it's a convention followed by the React community to indicate that the function is a custom hook.

    * **Implement the Hook Logic:**
    Inside the custom hook function, implement the reusable logic using hooks like useState, useEffect, or other custom hooks if necessary. The custom hook can accept parameters just like regular functions.

    * **Return Values as Needed:**
    If our custom hook needs to return any values (such as state variables or functions), make sure to return them from the custom hook function.

    * **Use the Custom Hook in Components:**
    Once the custom hook is created, we can use it in our functional components just like any other hook provided by React.

Here's an example of a custom hook that manages a simple counter:
```jsx
    import { useState } from 'react';

    function useCounter(initialCount = 0, step = 1) {
        const [count, setCount] = useState(initialCount);

        const increment = () => {
            setCount(count + step);
        };
        const decrement = () => {
            setCount(count - step);
        };
        const reset = () => {
            setCount(initialCount);
        };
        return { count, increment, decrement, reset };
    }
    export default useCounter;
```
We can then use this custom hook in our components:
```jsx
import React from 'react';
import useCounter from './useCounter';

function Counter() {
    const { count, increment, decrement, reset } = useCounter(0, 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter;
```
<!-- ____________________________________________________________________ -->

# 16. What is the use of useMemo ?
- `useMemo` is a React hook that is used for memoization, which is a technique to optimize performance by caching the results of expensive computations and recalculating them only when necessary. It is particularly useful when we have a function that is computationally expensive to run or a value that takes a lot of time to compute, and we want to avoid re-computing it on every render.

The primary use of `useMemo` is to memoize the result of a computation and recompute it only when one of the dependencies has changed. It takes two arguments:
- A function that computes the value we want to memoize.
- An array of dependencies. The value returned by the function will only be recalculated when one of the dependencies has changed.
<!-- ____________________________________________________________________ -->

# 17. What is the use of usecallback?
- `useCallback` is a React hook used for optimizing performance by memoizing callback functions. It is particularly useful when passing callbacks to child components, especially when those callbacks are created inside the parent component's render function. Without memoization, a new instance of the callback function would be created on each render, potentially causing unnecessary re-renders in child components due to prop changes.

The primary use of `useCallback` is to memoize a callback function and return a memoized version of it. It takes two arguments:
- The callback function that we want to memoize.
- An array of dependencies. The callback function will only be re-created if one of the dependencies has changed.
<!-- ____________________________________________________________________ -->

# 18. What is the use of useEffect ?
- `useEffect` is a React hook used for handling side effects in functional components. Side effects are operations that occur after the initial render of a component, such as data fetching, DOM manipulation, subscriptions, or any other operations that may affect the outside world.

The primary use of `useEffect` is to perform side effects in functional components in a way that is similar to lifecycle methods in class components. `useEffect` runs after every completed render, including the initial render, and subsequent re-renders caused by updates to props or state.

**"useEffect" takes two arguments:**
- The effect function: A function that contains the code for the side effect we want to perform. This function will be called after every render.
- Dependency array: An optional array of dependencies. If provided, the effect function will only be re-executed if one of the dependencies has changed since the last render. If the dependency array is empty ([]), the effect will only run once after the initial render.
<!-- ____________________________________________________________________ -->


<!-- ____________________________________________________________________ -->

# 21. What is Lazy Loading?
- Lazy loading is a technique used in web development to defer the loading of non-essential resources (such as images, scripts, or other assets) until they are actually needed. This helps improve the initial loading time and performance of web pages by prioritizing the loading of critical content first and delaying the loading of less important content until later.

- Lazy loading is particularly useful for web pages with large or complex content, where loading all resources upfront would significantly increase the initial page load time and impact the user experience. By lazily loading resources only when they are needed, you can reduce the initial payload size and improve the perceived performance of the web page.

- In the context of images, lazy loading typically involves loading placeholder images (such as small, low-resolution thumbnails) initially, and then loading the full-size images asynchronously as the user scrolls down the page or when the images come into the viewport. This technique is commonly used in image galleries, image-heavy websites, and long-scrolling pages.

- Similarly, lazy loading can be applied to other types of resources, such as JavaScript files, CSS files, fonts, or data. For example, in web applications, you can lazy load JavaScript modules or components using dynamic imports or code splitting techniques, loading them only when they are required for a particular feature or page.

- Overall, lazy loading is a powerful optimization technique that helps reduce the initial loading time and improve the performance of web pages by deferring the loading of non-essential resources until they are needed, thereby enhancing the user experience.
<!-- ____________________________________________________________________ -->

# 22. What is Reconcilation?
- Reconciliation is the algorithm React uses to differenciate one tree with another to determine which parts need to be changed in the UI.
- Reconciliation is a process in React that ensures that the user interface (UI) stays in sync with the application's state. When the state of a React component changes (due to updates in props or state), React re-renders the component and compares the new virtual DOM tree with the previous one to determine the minimum number of DOM manipulations needed to update the actual DOM.
<!-- ____________________________________________________________________ -->

# 23. What is Reconcilation?
- Reconciliation in React is the process of comparing the previous virtual DOM (a lightweight representation of the actual DOM) with the new virtual DOM generated after a state or prop change in a component. The purpose of reconciliation is to determine what changes need to be made to the actual DOM in order to reflect the updated state of the component.
<!-- ____________________________________________________________________ -->

# 24. Diff b/w Usemomo, usecallBAck, useEffect?

- `useMemo`, `useCallback`, and `useEffect`, three important React hooks, based on their purposes and use cases:
    *useMemo:**
- Purpose: `useMemo` is used for memoizing the result of expensive calculations or computations. It caches the result of a function and returns the cached value when the dependencies (specified as the second argument) remain the same.
- Use Case: It's useful when you need to optimize performance by avoiding redundant calculations, especially when the result of a computation is used repeatedly in a component but doesn't need to be recalculated every render.
- Example: Memoizing a complex computation, such as sorting or filtering a large array, to avoid recalculating it on every render.

    **useCallback:**
- Purpose: `useCallback` is used for memoizing callback functions. It returns a memoized version of the callback that only changes if one of the dependencies (specified as the second argument) has changed.
- Use Case: It's useful when passing callbacks to child components, preventing unnecessary re-renders of child components caused by new instances of callback functions being created on every render of the parent component.
- Example: Memoizing event handlers or callback functions passed as props to child components to optimize performance.

    **useEffect:**
- Purpose: useEffect is used for handling side effects in functional components. It allows you to perform side effects (such as data fetching, DOM manipulation, or subscriptions) after the component has rendered.
- Use Case: It's useful for managing asynchronous operations, subscribing to data sources, setting up timers, or performing cleanup tasks.
- Example: Fetching data from an API, subscribing to WebSocket events, updating the document title, or cleaning up resources when the component is unmounted.

In summary, while `useMemo`, `useCallback`, and `useEffect` are all React hooks used for optimizing performance and managing side effects, they have different purposes and use cases:

* `useMemo` is for memoizing expensive computations.
* `useCallback` is for memoizing callback functions.
* `useEffect` is for handling side effects.
<!-- ____________________________________________________________________ -->

# 25. what is lifting State up?
- "Lifting state up" is a common pattern in React where we move the state from a lower-level component up to a higher-level component in the component tree. This allows multiple components to share the same state and synchronize their UI based on that state.

The main idea behind lifting state up is to maintain a single source of truth for the shared state, making it easier to manage and update. By lifting state up, we create a more centralized and predictable state management system for our React application.
<!-- ____________________________________________________________________ -->

<!-- ____________________________________________________________________ -->


<!-- ____________________________________________________________________ -->

# 28. what is useRef?
-  `useRef` is a React hook that provides a way to create a mutable reference to a DOM element or any value that persists across renders without causing re-renders. It returns a mutable object ({ current }) that can hold a reference to a DOM element or any other value.

***The primary use cases of `useRef` include:***
- Accessing DOM Elements: We can use `useRef` to obtain references to DOM elements, allowing to interact with them imperatively (i.e., outside of React's declarative rendering). This is particularly useful for accessing DOM elements in event handlers, animations, or third-party libraries.
- Holding Mutable Values: We can use `useRef` to hold mutable values that persist across renders without causing re-renders. Unlike useState, updating the current property of a `useRef` object does not trigger a re-render of the component.
<!-- ____________________________________________________________________ -->

# 29. what is Profiler?
- The Profiler is a React component that provides performance profiling capabilities for React applications. It allows developers to identify and analyze performance bottlenecks in their application by measuring how often a React component renders and how long it takes to render.

The Profiler works by wrapping a portion of our application's tree with a Profiler component and providing a callback function to measure performance metrics. When the wrapped components are mounted, updated, or unmounted, the Profiler component records timing information and passes it to the callback function.

```jsx
import React, { Profiler } from 'react';

const MyComponent = () => {
    const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        console.log(`Component ${id} was rendered in ${actualDuration} milliseconds`);
    };

    return (
        <Profiler id="MyComponent" onRender={onRenderCallback}>
            {/* Your component tree goes here */}
        </Profiler>
    );
};
```
***In this example*** we define a callback function `onRenderCallback` that logs information about the rendering performance of the component. We then wrap our component tree with a Profiler component and pass the callback function to the onRender prop.

***The `onRenderCallback` function receives several parameters:***
- `id`: The identifier of the component being profiled.
- `phase`: The phase of the render (e.g., "mount" for initial render, "update" for re-renders).
- `actualDuration`: The time taken to render the component and its descendants.
- `baseDuration`: The estimated time that React thinks the component would take to render if there were no memoization or batching.
- `startTime`: The time when React started rendering the component.
- `commitTime`: The time when React committed the component's changes to the DOM.
- `interactions`: A set of interactions (e.g., clicks, keyboard events) that occurred during the render.
<!-- ____________________________________________________________________ -->

# 30. what is use of StrictMode in react?
- `StrictMode` is a built-in component in React that helps developers write better React code by highlighting potential problems and deprecated features in their applications. It is designed for development mode only and has no effect in production builds.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        {/* Your root component goes here */}
    </React.StrictMode>,
    document.getElementById('root')
);
```
`StrictMode` is a useful tool for improving the quality of React applications, promoting best practices, and ensuring smoother upgrades to future versions of React. It's recommended to use StrictMode during development to catch potential issues early and write cleaner, safer React code.
<!-- ____________________________________________________________________ -->

# 31. what is static type checking?
- Static type checking is a process used in programming languages to detect type-related errors in code at compile time, before the code is executed. The goal of static type checking is to identify potential type mismatches, inconsistencies, or errors in the codebase and prevent them from causing runtime errors or unexpected behavior.

In statically typed languages, each variable, parameter, function, and expression has a fixed type that is known at compile time. The compiler analyzes the code to ensure that types are used consistently and correctly throughout the program. If the compiler detects any type-related errors, it raises a compilation error or warning, alerting the developer to the issue.
<!-- ____________________________________________________________________ -->

# 32. what is React.Fragment?
- `React.Fragment` is a built-in component in React that allows you to group multiple children elements without adding extra nodes to the DOM. It provides a way to return multiple elements from a component's render method without needing to wrap them in a parent element like a `div` or a `span`.

`React.Fragment` is a useful feature in React for grouping multiple elements without adding extra nodes to the DOM, helping you write cleaner and more efficient JSX code.
<!-- ____________________________________________________________________ -->

# 33. What is type checking with Proptype in React?
- In React, PropTypes is a mechanism for validating the props passed to components. It allows you to specify the types (and sometimes shapes) of the props that a component is expecting to receive. PropTypes are used primarily for type checking and documentation purposes, helping developers catch errors early and communicate the intended usage of components.
<!-- ____________________________________________________________________ -->


<!-- ____________________________________________________________________ -->

# 35. what is Synthetic Event in react?
- In React, a synthetic event is a cross-browser wrapper around the browser's native event system. It is an abstraction provided by React to ensure consistent behavior and handling of events across different browsers.

- When you write event handlers in React components, such as onClick, onChange, or onSubmit, React intercepts the native browser events and normalizes them into instances of synthetic events. These synthetic events have the same interface as native DOM events, but they are created and managed by React rather than directly by the browser.

- The purpose of synthetic events is to provide a unified and predictable way to handle events in React applications, regardless of the underlying browser implementation. By using synthetic events, React can optimize event handling and provide additional features such as event pooling and automatic event delegation.
<!-- ____________________________________________________________________ -->

# 36. what is ES6?
- ES6, short for ECMAScript 6, is the sixth edition of the ECMAScript standard, which is the scripting language specification that JavaScript is based on. ES6 introduced significant enhancements and new features to the JavaScript language, providing developers with more powerful tools and capabilities for writing cleaner, more expressive, and more maintainable code.
<!-- ____________________________________________________________________ -->

# 37. what is complier?
- A compiler is a software tool that translates source code written in a high-level programming language into machine code or another intermediate representation that can be executed by a computer's processor. The primary function of a compiler is to convert human-readable source code into executable code that can be run on a computer.
<!-- ____________________________________________________________________ -->

# 38. what is interpeter?
- An interpreter is a software program that directly executes instructions written in a high-level programming language without the need for prior compilation into machine code. Unlike compilers, which translate entire source code files into machine code before execution, interpreters execute code line by line or statement by statement, interpreting and executing each instruction in real-time.
<!-- ____________________________________________________________________ -->

# 39. what is ContextApi?
- The Context API is a feature in React that provides a way to pass data through the component tree without having to pass props manually at every level. It allows to share data between components at different levels of the component tree without the need to explicitly pass props through every intermediate component.
    ***The Context API consists of two main parts:***
    1. Context Object: A context object is created using the React.createContext() function. This context object represents the shared data that we want to make available to components within the context tree.

    2. Provider and Consumer Components: The context object provides a Provider component and a Consumer component. The Provider component is used to wrap a portion of the component tree and supply the context data to all descendant components. The Consumer component is used within descendant components to access the context data provided by the nearest Provider ancestor.
<!-- ____________________________________________________________________ -->
