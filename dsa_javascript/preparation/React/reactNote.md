what is useState?
It is like a container. it can have all kinds of data.

what is props?
It is an intermediator.

what are components?
Difference between functional components & class components

what is Lifecycle method.
what is hooks in funcitonal components.
what is the use of useEffect.
what is controlled and uncontrolled component.
# what is state lifting up?
- State lifting is a concept in React where we move the state from a lower-level component to a higher-level component in the component tree. This is done to share state and functionality between components that don't have a direct parent-child relationship.

# difference between useMemo, useCallback and useEffect.
- useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed.

useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.

useEffect: The useEffect hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function.

what is Memo?
# what is Lazy loading?
- Lazy loading in React allows us to split our code into smaller chunks, loading only the code that is needed for a particular part of our application when it is actually required.
- Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed

# How to send data child component to parent conponent.
- In React, we can pass data from a child component to a parent component by using callback functions. This involves defining a function in the parent component and passing it down to the child component as a prop. The child component can then call this function and pass data back to the parent.

# what is useRef?
- The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

# what is list in keys?
- A “key” is a special string attribute we need to include when creating lists of elements. `Keys` provides the uniqueness of all id's.

# what is the use of package.json?
- The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

# What is npm? 
- npm, or Node Package Manager, is a widely used package manager for 
JavaScript and Node.js applications. It's a command-line tool that allows developers 
to easily install, manage, and share libraries, packages, and dependencies that are 
used in JavaScript and Node.js projects.
***Why do we use npm?***
- to manage the packages and libraries that help use to work with Node.
**alternative of npm is yarn**

# what is strictMode?
- StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Note: Strict mode checks are run in development mode only; they do not impact the production build.

what is error boundaries?
# what are browser-router?
- React Router, is an essential tool for building single-page applications (SPAs). React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. 
**The Main Components of React Router are:**
    1. BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
    2. Routes: It’s a new component introduced in the v6 and an upgrade of the component. The main advantages of Routes over Switch are:
        * Relative s and s
        * Routes are chosen based on the best match instead of being traversed in order.
    3. Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
    4. Link: The link component is used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.