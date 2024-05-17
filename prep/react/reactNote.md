# What is React? What is the Role of React is software development?
- 3 Main Points about React:
    1. React is an open source Javascript Library.
    2. React is used for building user interfaces(UI).
    3. React simplifies the creation of SPA by using reusable components.

# What are the Key Features of react?
- 7 Key Features of React
    1. Virtual DOM - React utilizes a virtual representation of the DOM, allowing efficient updates by minimizing direct manipulation of the actual DOM, resulting in improved performance.
    2. Component-Based Architecture - React structures user interfaces as modular, reusable components, promoting a more maintainable and scalable approach for building applications.
    3. Reusablility & Composition - React enables the creation of reusable components that can be composed together, fostering a modular and efficient development process.
    4. JSX(Javascript XML) - JSX is a syntax extension for Javascript used in React, allowing developers to write HTML-like code within Javascript, enhancing readability and maintainability.
    5. Declarative Syntax - React have a declarative programming style(JSX), where developers focus on "what" the UI should look like and react handles the "how" behind the scenes. This simplify the code.
    6. Community & Ecosystem - React benefits from a vibrant and extensive community, contributing to a rich ecosystem of libraries, tools, and resources, fostering collaborative development and innovation.
    7. React Hooks - Hooks are functions that enable functional components to manage state and lifecycle features, providing a more concise and expressive way to handle component logic.

# What is DOM?
DOM(Document Object Model) represents the web page as a tree-like structure which allows Javascript to dynamically access and manipulate the content and structure of a web page.


# What is Virtual Dom? Difference between DOM and Virtual DOM?
React uses a Virtual DOM to efficiently update the UI without re-render the entire page, which helps improve performance and make the application more responsive.

- DOM
    1. DOM is actual representation of the webpage.
    2. Re-renders the entire page when updates occur.
    3. Can be slower, especially with frequent updates.
    4. Suitable for static websites and simple applications.
- Virtual DOM
    1. Virtual DOM is lightweight copy of the DOM.
    2. Re-renders only the changed parts efficiently.
    3. Optimized for faster rendering.
    4. Ideal for dynamic and complex single-page applications with frequent updates.

# What are React Components? What are the main elements of it?
In React, a component is a reusable building block for creating user interfaces.

# what is SPA(Single Page Application)?
A Single Page Application(SPA) is a web application that have only a single web page. Whenever user do some action on the website, then in response content is dynamically updated without refreshing or loading a new page.

# 5 Advantages of React.
    1. Simple to build Single Page Application(by using Components)
    2. React is cross platform and open source(Free to use)
    3. Lightweight and very fast(Virtual DOM)
    4. Large Commuity and Ecosystem.
    5. Testing is easy  

# Disadvantage of React.
    React is not a good choice for very small applications.

# What is the role of JSX in React?
    1. JSX stands for Javascript XML.
    2. JSX is used by React to write HTML-like code.
    3. JSX is converted to Javascript via tools like Babel. Because Browsers understand Javascript not JSX.

# What is the difference between Declarative & Imperative syntax?
- Declarative syntax
    1. Declarative syntax focuses on describing the desired result without specifying the step-by-step process.
    2. JSX in react is used to write declarative syntax.
- Imperative syntax
    1. Imperative syntax involves step-by-step process to achieve a particular goal.
    2. Javascript has an imperative syntax.

# What is the Arrow Function Expression in JSX?
The arrow function expression syntax is a concise way of defining functions.

# How React App Load and display the components in browser?

# What is the difference between React and Angular?
- React -> 
    1. React is a javascript library.
    2. React uses a virtual DOM which makes it faster.
    3. React is smaller in size and light weight and therefore faster sometime.
    4. React depends on external libraries for many complex features, so developer has to write many lines of code for complex functionalities.
    5. React is simple to learn and more popular then Angular.
- Angular ->
    1. Angular is a complete framework.
    2. Angular uses a real DOM.
    3. Angular is bigger because it is a complete framework.
    4. Since Angular is a complete framework, therefore it provide built-in support for features like routing, forms, validation, and HTTP requests.
    5. Angular is slightly difficult to learn as it has Typescript, OOPS concept and many more things.

# Name 5 JS frameworks other than React?
- Angular, Vue.js, Angular JS, Backbone .js, Ember.js

# Whether React is a Framework or a Library? What is the difference?
* Library: Developers import the libraries at the top and then used its functions in components. React is commonly referred to as a Javascript library.
* Framework: Developers need to follow a specific structure or pattern defined by the framework. Angular is a framework.

# How React provides Reusability and Composition?
* React provides reusability and composition through its component-based architecture.
* **Reusability:** Once we create a component, we can ***re-use*** it in different parts of our application or even in multiple projects.
* **Composition:** Composition is creating new and big components by ***combining existing small components.*** Its advantage is, change to one small component will not impact other components.

# What are state, stateless, stateful and state management terms?
"state" refers to the current data of the component.
Stateful or state management means, when a user performs some actions on the UI, then the React appliction should be able to ***update and re-render that data or state*** on the UI.

# What are Props n JSX?
props(properties) are a way to ***pass data*** from a parent component to a child component.

# What is NPM? What is the role of node_modules folder?
NPM(Node Package Manager) is used to manage the dependencies for our React project, including the React library itself.
Node_modules folder contains all the dependencies of the project, including the React library.

# What is the role of the public folder in React?
Public folder contains static assets that are served directly to the user's broweser, such as images, fonts, and the index.html file.

# What is the role of the src folder in React?
src folder is used to store all the source code of the application which is then responsible for the dynamic changes in our web application.

# What is the role of index.html page in React?
index.html file is the main HTML file(SPA) in React application. 
Here we have the div with id="root" which will be replaced by the component inside index.js file.

# What is the role of index.js file and ReactDOM in React?
ReactDOM is a Javascript library that renders components to the DOM or browser.

The index.js file is the JS file that replaces the root element of the index.html file with the newly rendered components.

# What is the role of the App.js file in React?
App.js file contain the root component(App) of React application.
App component is like a container for other components.
App.js defines the structure , layout and routing in the application.

# What is the role of function and return inside App.js?
Function - the function keyword is used to define a Javascript function that represents our React component. Function is like a placeholder which contains all the code or logic of the component. The function takes in props as its arguments(if needed) and returns JSX.

return is used to return the element from the function.

# Can we have a function without a return inside App.js?
Yes, a function without a return statement is possible. In that case, our component will not render anything in the UI. The common use case is for logging purpose.

# What is the role of export default in App.js?
Export statement is used to make a component available for import using "import" statement in other files.

# Does the file name and component name must be same in React?
No, the file name and component name don't have to be the same. However it is not recommended to keep the same for easier to organise and understand the code.

# Advantages of JSX.
-   1. Improve code readability and writability.
    2. Error checking in advance.
    3. Support JS expressions.
    4. Improved performance.
    5. Code reusability.

# What is Babel?
Babel in JS is used to transpile JSX syntax into regular Javascript which browser can understand.

# Fragments
In React, fragment is a way to group multiple children's elements. Using a fragment prevents the addition of unnecessary nodes to the DOM.

# Spread Operator in JSX.
The spread operator(...) is used to expand or spread an array or object.

# What are the types of Conditional Rendering in JSX?
-   1. If/else statement
    2. Ternary operator
    3. && operator
    4. Switch statement

# How to iterate over a list in JSX? What is map() method?
map() method allows us to iterate over an array and modify its elements using a callback function.

# What is transpiler? Difference between compiler and transpiler.
A transpiler is a tool that converts source code from one High-Level language(JSX) to another high-level programming language(Javascript). Example: Babel.
A compiler is a tool that converts high-level programming language(Java) into a lower-level language(machine code or byte-code).

# Is it possible to use JSX without React.
Yes, it is possible to use JSX without React by creating our own transpiler like React. However it is not recommended to since JSX is tightly integrated with React and relies on many React-specific features.

# What are React Components? What are the main elements of it?
In react, a component is a reusable building block for creating user interfaces.

# Types of React Components. What is functional componentss?
Two types: Functional components and Class components.
Functional components are declared as a Javascript function. They are stateless component, but with the help of hooks, they can now manage state also.

# How do you pass data between functional components in React?
prop(properties) are a way to pass data from a parent componenet to a child component.

# Prop Drilling.
Prop drilling is the process of passing down props through multiple layers of components.

# Why to Avoid Prop Drilling? In how many ways can we avoid prop drilling?
- Why to avoid:
    1. Maintenance: Prop drilling can make code harder to maintain as changesss in data flow require updates across multiple components.
    2. Complexity: It increases code complexity and reduces code readability.
    3. Debugging: Debugging becomes challenging when props need to be traced through numerous components.

- 5 ways to avoid Prop Drilling:
    1. Using Context API
    2. Using Redux
    3. Using Component Composition
    4. Using Callback Function
    5. Using Custom Hooks

# Class Components.
Class components are defined ussing Javascript classes. They are stateful components by using the lifecycle methods. The render method in a class component is responsible for returning JSX.

# How to pass data between class components in React. 
this.props can be used in child component to access properties/data passed from parent component.

# What is the role of this keyword in class component?
`this` keyword is used to refer to the instance of the class.

# 5 difference between Functional component & class component.
- Funcitonal components
    1. Syntax: Defined as a JS function.
    2. state: Originally stateless but can now maintain state using hooks.
    3. Lifecycle mehtods: No
    4. Readability: more readable & concise.
    5. this keyword: No
    6. Do not have render method.
- Class components
    1. Defined as a JS(ES6) class.
    2. Can manage local state with this.state.
    3. There is Lifecycle method
    4. Verbose(complex)
    5. Access props using this.props
    6. have render method

# What is Routing and Router in React?
**Routing** It allows us to create a single-page web application with navigation, without the need for a full-page refresh.
**React Router** React Router is a library for handling routing and enables navigation and rendering of different components based on the URL.

# How to implement Routing in React.
- Step 1: Install React Router
- Step 2: Create Navigation
- Step 3: Create Routes

# What are the roles of <Routes> & <Route> component in React Routing?
The `<Routes>` component is used as the root container for declaring our collection of routes.
The `<Route>` component is used to define a route and specify the component that should render when the route matches. 

# What are Route Parameters in React Routing?
Route parameters in React Router are a way to pass dynamic values(data) to the component as part of the URL path.

# What is the role of Switch component in React Routing?
Switch component ensures that only the first matching `<Route>` is rendered and rest are ignored. Eg: Switch is commonly used to handle 404 or "not found" routes.

# What is the role of exect prop in React Routing?
exact prop is used with the `<Route>` component to match exactly to the provided path.

# What are react hooks? What are the top React hooks?
React hooks are inbuilt functions provided by react that allows functional components to use state and lifecycle features.
Before hooks, class components lifecycle methods were used to maintain state in React applications.
To use react hooks we first have to import it from React library.
Different hooks - useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect

#  What  is useEffert? How and when to use it.
useEffect is called after the function renders. Eg:- side effect. useEffect function will take two parameters. Eg: function and dependency array.

# What is the dependency array in the useEffect hook?
Depedency array acts as triggers for useEffect to rerun; meaning if any of dependencies value change, the code inside useEffect() will execute again. 

# What is the meaning of the Empty array[] in the useEffect()?
An empty array[] indicates that the effect function will run only ones, because there are no dependencies.

# What is the role of useContext hook?
useContext in React provides a way to pass data from parent to child component without using props.

# What is createContext() method? What are provider and consumer properties?
createContext() function returns an object with Provider and Consumer properties. The Provider property is responsible for providing the context value to all its child components. It can be used to consume the context value in child components.

# When to use useContext() hook instead of props in real applications?
We use useContext() hook instead of props when we want avoid prop drilling and access context values directly within deepy nested components.

# What is Components life cycle phases?
- Whenever a component is created in using class component, it goes through life cycle phases.
    1. Mounting Phase(Component creation started) - This phase occurs when an instance of a component is being created and inserted into the DOM.
    2. Updating Phase(Component updates) - This phase occurs when a component is being re-rendered as a result of changes to either its props or state.
    3. Unmounting Phasse(Removal from the DOM) - This phase occurs when a component is being removed from the DOM.

# What are component LIfe Cycle Methods?
Component lifecycle methods are special methods that get called at various stages of a component's life.

# What are constructors in class components? When to use them?
Constructor is a special method that is called when an instance of the class is created.
Constructor is used for initializing the component's state or performing any setup that is needed before the component is rendered.

# What is the role of the super keyword in constructor?
super keyword is used in the constructor of a class component to call the constructor of the parent class.
This is necessary to ensure that the initialization logic of the parent class is executed.

# What is the role of the render() method in component life cycle?
Render() method returns the React elements that will be rendered to the DOM.

# How the state can be maintained in a class component?
This is a two step process to maintain state:
    1. this.setState() method is used to update the state.
    2. this.state property is used to render the update state in DOM.

# What is the role of componentDidMount() method in component lifecycle?
componentDidMount() lifecycle method in React is the part of mounting phase and is called after a component has been rendered to the DOM.
Mostly used for side effects. For example, external data fetching or setting up subscriptions.

# What are controlled components in React?
-> A controlled component is a component whose form elements(like input fields or checkboxes) are controlled by the state of the application.

# What are the difference between controlled and uncontrolled components?
Controlled Components -
    1. Values are controlled by React state.
    2. Event handlers update React state.
    3. Don't depend on useRef().
    4. Re-renders on state changes.
    5. A recommended and standard practice of form handling in React.
Uncontrolled Components -
    1. Values are not controlled by React state.
    2. No explicit state update; values can be accessed directly from the DOM.
    3. Commonly uses useRef() to access form element values.
    4. Less re-rendering since values are not directly tied to React state.
    5. Useful in certain scenarios but les commonly considered a best practice.

# What are the characteristics of controlled componentss?
Characteristics fo controlled components:
    1. State Control: The value of the form element is stored in the component's state.
    2. Event Handling: Changes to the form element trigger an event(e.g., onChange for input fields).
    3. State Update: The event handler updates the component's state with the new value of the form element.
    4. Re-rendering: The component re-renders with the updated state, and the form element reflects the new value.

# What are the advantages of using controlled components?
-   1. In controlled components, form elements have their values managed by React state, ensuring a single source of truth.
    2. This approach facilitates predictable and synchronized updates, making it easier to implement features such as form validation, and dynamic rendering and seamless integration with React's lifecycle methods.
    3. Controlled components offer better control and maintainability compared to uncontrolled components, making them the best practice for handling forms in React applications.

# How to handle forms in React?
The preferred and recommended approach for handling forms in React is by ussing controlled components.

# How can you handle multiple input fields in a controlled form?
Maintain separate state variables for each input field and update them individually using the onChange event.

# How do you handle form validation in controlled component?
By using conditional rendering based on the state and validate input values before updating the state.

# In what scenarios might using uncontrolled components be advantageous?
Uncontrolled components can be beneficial when integrating with non-React libraries, or when dealing with forms where controlled components are not possible.

# What is code splitting in React?
Code splitting is a technique to split Javascript bundle into smaller chunks, which are loaded on-demand.

# How to implement code splitting in React?
- steps for code splitting in React:
    1. Use React.lazy() to lazily import components.
    2. Wrap components with Suspense to handle loading.
    3. Configure our built tool (e.g., Webpack) for dynamic imports.

# What is the role of lazy and Suspense methods in React?
React.lazy is a function that allows us to load a component lazily.
It enables code splitting by allowing us to import a component asynchronouly/dynamically, meaning component is loaded only when needed only.
The Suspense component is used to display a fallback UI while the lazily loaded component is being fetched.

# What are the Pros and Cons of Code Splitting?
- 5 Pros of code splitting:
    1. faster initial load time: Code splitting reduces the initial load time of our application by only loading the necessary code for the current view or feature. Good for performance.
    2. optimized bandwith usage: By loading only, the code needed for a specific page, it reduces the amount of data transferred over the network. Good for slow network. 
    3. Improved caching: Smaller, more focused code chunks are more likely to be cached by the browser. 
    4. paralled loading: Multiple smaller chunks can be loaded simultaneously , leading to faster overall loading times.
    5. easier maintenance: Code splitting can make our codebase more modular, independent and easier to maintain.

- 5 Cons of code splitting:
    1. Complexity: Implementing code splitting introduces additional complexity to our application. This complexity can make the development process slow.
    2. Tooling Dependencies: Proper code splitting often requires specific build tools and configurations, such as Webpack and Babel. Managing thesse tools is challenging.
    3. Potential for Runtime Errors: Dynamically loading code at runtime can introduce the possibility of runtime errors. Careful testing is necessary to catch such issues.
    4. Increased number of requests: Code splitting may increase the number of HTTP requests needed to fetch all the necessary chunks. This can impact performance.
    5. Learning curve: Developers who are new to code splitting may need time to understand the concepts and besst practice. This can be challenging.

# What is the role of Import() function in code splitting?
The import() function returns a promise that allow dynamic loading of modules.

# What is the purpose of the fallback prop in Suspense?
The fallback prop provides a loading indicator or UI while the dynamically imported component is being loaded.

# Can you dynamically load CSS files using code splitting in React?
Yes, using dynamic import() for CSS files allows us to load styles on-demand along with corresponding components.

# How do you inspect and analyze the generatod chunks in a React application?
Use tools like Webpack Bundle Analyzer to analyze the size and composition of chunks.

# Higher-Order Component.
A Higher-Order Component is a component which takes another component as an argument and adds extra features to another component.
HOC can be used for providing logging functionality to all the components in a reusable way.

# 5 Ways to style React components. Explain Inline styles?
-   1. Inline Styles
    2. Css stylesheets
    3. Css - Modules
    4. Global stylesheets
    5. Css Frameworks

# Defference between React & React Native
React - 
    1. React is a library.
    2. React is used for building web interfaces.
    3. Run on Web browsers.
    4. HTML and CSS are used for UI.
    5. Deployed as web applications.
React Native - 
    1. It is a framework.
    2. React Native is used for building mobile applications.
    3. Run on iOS and Android platforms.
    4. Native UI components(e.g., View, Text) are used for UI.
    5. Deployed through app stores(e.g., App store, Google Play).

# What is GraphQL?
GraphQL is a query language for Apis(Application Programming Interfaces) and a runtime for executing those queries with the existing data.
GraphQL and React are often used together. React components can use GraphQL queries to fetch the data required for rendering.

# What are the top 3 ways to achieve state management? When to use what in React?
    1. useState Hook:
    * When to use: Simple component-level state.
    * Reason: Ideal for applications having small components and isolated state because it is Lightweight and built into React only.
    2. Context API:
    * When to use: Prop drilling avoidance for sharing global data.
    * Reason: Simplifies data passing through the component tree, reducing the need for manual prop drilling.
    3. Redux: 
    * When to use: Large-scale applicationss with complex state.
    * Reason: Centralized store and actions provide a predictable state management pattern, aiding in debugging and scalability.

# How can we implement Authentication in a react application?
-   1. POST:{username, passsword}
    2. Authenticate & create JWT Token
    3. Return Response {JWT token}
    4. Store JWT token at local storage
    5. Request Data {JWT token: Header}
    6. Validate token signature
    7. Send Data
    8. Display data on browser.

# React Profiler.
React Profiler is a set of tools in React that allows developers to profile(analyze) the performance of a React application.

# difference between fetch & axios for api calls in React?
- fetch
    1. fetch is a built-in Javascript function, so it doesn't require any additional libraries.
    2. fetch returns Promises, making it easy to work with asynchronous code using aync/await syntax.
    3. If we want to keep http requests simple, fetch is a good choice.
- Axios
    1. Axios is a third-party library, that simplifies the process of making HTTP requests.
    2. Axios allows us to use interceptors, which can be good for tasks like request/response logging, authentication, and error handling.
    3. If we want to intercept http request/response or improve error handling then Axios has more features to do so.

# Popular testing libraries for React.
    Jest 
    React Testing Library
    Enzyme
    Cypress

# How can you Optimize Performance in a react application?
-   1. Memoization with useMemo and useCallback: Use this hooks to memoize values and reducing unnecessary recalculations.
    2. Optimizing Renders with React.Fragement: Use it to avoid unnecessary wrapper elements that could cause additional DOM nodes.
    3. Lazy Loading with React.Lazy: Use it to load components lazily, reducing the initial bundle size and improving initial loading performance.
    4. Code Splitting: Employ code splitting to divide our application into smaller chucks that are loaded on demand, improving initial load times.
    5. Optimizing Images and Assets: Compress and optimize images and leverage lazy loading for images to reduce netword and rendering overhead.

# Explain Reactive Programming with example?
Reactive programming is a programming paradigm that focuses on reacting to changes and events in a declarative and  asynchronous manner.
Declarative means a programming style where we write the code for what we want to achieve, rather than specifiying step-by-step how to achieve it. For example, JSX in React has declarative syntax.
Axynchronously means an action that does not block other actions.

# In how many ways can we implement Reactive Programming in react?
1. State and Props: Reacting to changes in local component state and passing dat reactively through props.
2. React hooks: Leveraging useState and useEffect hooks for managing state and side effects in functional components.
3. Event Handling: Reacting to user interactions through event handling and updating state accordingly.
4. Context API: Sharing and managing global state reactively across components using the Context API.
5. Redux: Using state management libraries like redux for managing complex application state reactively.
6. Component Lifecycle Methods: Using class components and lifecycle methods for handling side effects and updates.
7. Async/Await: Utilizing async/await syntax for handling asynchronous operations reactively.
8. RxJSS and Observables: Leveraging RxJS for handling asynchronous operations and data stream in a reactive manner.

# How to pass data from child component to parent component in React?
Parent provides a callback function to child and then child component can then invoke this callback to pass data back to the parent.


<!-- ________________________________________________________________________________________________________ -->

# React-
ReactJS is a declarative, efficient, and flexible JavaScript library for building
user interfaces. It is an open-source, component-based front-end library that is 
responsible only for the view layer of the application. ReactJS is not a framework, 
it is just a library developed by Facebook.
**Why to learn React.JS?**
Ans -> makes easy to manage & build complex front end.

# What is useState?
useState is like a container where we can store all kinds of  data, like - number, string, boolean, object, array and even null. States are mutable. State has scope only inside the component. We cannot access the code outside the component.

# props
props is an intermediator between two components, that help us to transfer data from parent component to child component.

# Hooks 
Hooks are a kind of function which helps us to resolve a particular problem.

# Components
Components describe a part of the user interface. They are re-usable and can be nested inside other components.
Components are independent and reusable bits of code. They serve the same purpose as javascript functions, but work in isolation and return HTML.

# useEffect
useEffect hook is used for handling side effects in functional components. Side effects are actions that occur outside the scope of the component, such as data fetching, subscription or directly changing the DOM.
It accepts two arguments - first is function & second is dependency array which is optional.

# what is state lifting up?
- State lifting is a concept in React where we move the state from a lower-level component to a higher-level component in the component tree. This is done to share state and functionality between components that don't have a direct parent-child relationship.

# difference between useMemo, useCallback and useEffect.
- useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed.

useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.

useEffect: The useEffect hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function.

# what is Lazy loading?
- Lazy loading in React allows us to split our code into smaller chunks, loading only the code that is needed for a particular part of our application when it is actually required.
- Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed.

# How to send data from child component to parent conponent.
- In React, we can pass data from a child component to a parent component by using callback functions. This involves defining a function in the parent component and passing it down to the child component as a prop. The child component can then call this function and pass data back to the parent.

# what is useRef?
- The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

# what is list in keys?
- A “key” is a special string attribute we need to include when creating lists of elements. `Keys` provides the uniqueness of all id's.

# what is the use of package.json?
- The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

# What is npm? 
- npm, or Node Package Manager, is a widely used package manager for JavaScript and Node.js applications. It's a command-line tool that allows developers to easily install, manage, and share libraries, packages, and dependencies that are used in JavaScript and Node.js projects.

***Why do we use npm?***
- to manage the packages and libraries that help us to work with NodeJS.
**alternative of npm is - yarn**

# What is npx? 
-> `npx`(Node Package Executor) is a package runner tool that comes with npm 
(Node Package Manager) starting from npm version 5.2.0 and higher. It allows us to execute commands from Node.js packages that aren't globally installed on our system. `npx` is particularly useful for running one-off commands, scripts, or executables that are part of packages we haven't installed globally or don't want to install globally.

# what is strictMode?
- StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Note: Strict mode checks are run in development mode only; they do not impact the production build.

# what are browser-router?
- React Router, is an essential tool for building single-page applications (SPAs). React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. 
**The Main Components of React Router are:**
    1. BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep the UI in sync with the URL. It is the parent component that is used to store all of the other components.
    2. Routes: It’s a new component introduced in the v6 and an upgrade of the component. The main advantages of Routes over Switch are:
        * Relative s and s
        * Routes are chosen based on the best match instead of being traversed in order.
    3. Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
    4. Link: The link component is used to create links to different routes and implement navigation around the application. It works like an HTML anchor tag.

# Axios -> 
Axios is a popular JavaScript library used for making HTTP requests in both browser and Node.js environments. It provides a simple and straight forward way to send and receive HTTP requests, making it a valuable tool for working with web APIs and servers.

# Fragment 
-> In React, a fragment is a way to group multiple children elements without adding an extra DOM element to the rendered output. Fragments are a lightweight and efficient way to structure our component's JSX code, especially when we need to return adjacent JSX elements without a parent wrapper.

# JSX -> 
JSX (JavaScript XML) is an extension of JavaScript used in React for defining the structure and content of user interfaces. It provides a more concise and readable way to describe the structure of UI components compared to manually creating DOM elements with JavaScript functions.
                    JSX resembles HTML but is actually a syntax extension for JavaScript. It allows us to write HTML-like code within our JavaScript files.

# What is jsx?
- JSX stands for JavaScript XML. It is a syntax extension for JavaScript, often used with React, that allows us to write HTML-like code directly within JavaScript. JSX makes it easier to write and read React components by blending HTML and JavaScript together.

Using JSX directly is much more readable and maintainable compared to manually creating React elements using React.createElement. Therefore, JSX has become the standard way of writing React components.

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

# Redux
A container where we can store our whole application data. So we call it to state management. It does not belong to the component state.

# What is virtul Dom ?
- In React.js, the Virtual DOM (Document Object Model) is a concept that refers to a lightweight copy of the actual DOM. The DOM represents the structure of a document as a tree of nodes, where each node represents an element, attribute, or text. Manipulating the DOM directly can be inefficient, especially when dealing with large and complex web applications.

React's Virtual DOM is an abstraction of the real DOM. When we make changes to our React application, instead of directly manipulating the actual DOM, React first updates the Virtual DOM. React then compares the updated Virtual DOM with the previous version of the Virtual DOM (or a snapshot of it) to determine the minimal set of changes needed to update the actual DOM. This process is known as "reconciliation."

Once React determines the difference between the previous Virtual DOM and the updated Virtual DOM, it applies only those necessary changes to the real DOM. By minimizing the number of actual DOM manipulations, React optimizes performance and ensures faster rendering of UI changes.

Virtual DOM Key Concepts :
* Virtual DOM is the virtual representation of Real DOM.
* React update the state changes in Virtual DOM first and then it syncs with Real DOM.
* Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
* Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM” by a library such as ReactDOM and this process is called reconciliation.
* Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, we can dissect it into small elements and interactions.

# What is condition Rendering?
- Conditional rendering in React refers to the practice of rendering different content or components based on certain conditions. This allows us to dynamically control what is displayed in our UI based on the current state of our application or specific criteria.

There are several ways to implement conditional rendering in React:

***1. Using JavaScript Conditional Statements:***
***2. Using Logical && Operator:***
***3. Using Conditional Rendering with Functions:***
***4. Using Ternary Operator within JSX:***    

# setState
-  The setState method() enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state. The setState() allows you to change state in a React class component.

# Pure Component 
- A pure component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component. Here we never mutate the state. It always return a new object that reflects the new state.

# What is memo ?
- In React, `memo` is a higher-order component (HOC) or a function that allows to optimize the performance of functional components by memoizing the result of the component's render function. It's similar to `React.PureComponent` for class components.

When we wrap a functional component with `memo`, React memoizes the component, meaning that React will only re-render the component if its props have changed. If the props remain the same between renders, React will reuse the memoized result of the component's render function, thereby preventing unnecessary re-renders and improving performance.

# what is useRef?
- The `useRef` is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
    In other words, the useRef is a hook that uses the same ref throughout. It saves its value between re-renders in a functional component and doesn’t create a new instance of the ref for every re-render. It persists the existing ref between re-renders.

***The primary use cases of `useRef` include:***
- Accessing DOM Elements: We can use `useRef` to obtain references to DOM elements, allowing to interact with them imperatively (i.e., outside of React's declarative rendering). This is particularly useful for accessing DOM elements in event handlers, animations, or third-party libraries.
- Holding Mutable Values: We can use `useRef` to hold mutable values that persist across renders without causing re-renders. Unlike useState, updating the current property of a `useRef` object does not trigger a re-render of the component.

# createRef:
The createRef is a function that creates a new ref every time. Unlike the useRef, it does not save its value between re-renders, instead creates a new instance of the ref for every re-render. Thus implying that it does not persist the existing ref between re-renders.

# Difference between useRef and CreateRef :
**useRef**
    1. It is a hook.
    2. It uses the same ref throughout.
    3. It saves its value between re-renders in a functional component.
    4. It persists the existing ref between re-renders.
    5. It returns a mutable ref object.
    6. The refs created using the useRef can persist for the entire component lifetime.
    7. It is used in functional components.

**createRef**
    1. It is a function.
    2. It creates a new ref every time.
    3. It creates a new ref for every re-render.
    4. It does not persist the existing ref between re-renders.
    5. It returns a read-only ref object.
    6. The refs created using the createRef can be referenced throughout the component.
    7. It is used in class components. It can also be used in functional components but might show inconsistencies.

# forwardRef
React forwardRef allows parent components to move down (or “forward”) refs to their children. It gives a child component a reference to DOM entity created by its parent component in React. This helps the child to read and modify the element from any location where it is used.
    React forwardRef allows to expose a DOM node to Parent Component. It is a method that lets React forward the React refs to the child component. This technique is Forwarding Ref.

# Controlled Components
- A controlled component is a component whose form elements are controlled by the state of the application.
    In other words, controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

# Uncontrolled Components
- Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

# What is Portal?
- In React, a portal is a feature that allows to render children components into a different part of the DOM tree, outside of the parent component's DOM hierarchy. This means we can render components at any location in the DOM, even if they are not direct descendants of the current component's DOM node.

Portals are useful for scenarios where we need to render content outside of the typical DOM hierarchy, such as modals, tooltips, popovers, or dropdown menus. By using portals, we can ensure that these components are rendered in a specific part of the DOM, such as at the top level of the document body, regardless of their position in the component tree.

# Error Boundary
- Error boundaries are React components that catch Javascript error in their child component tree, log those errors, and display a fall-back UI.
    A class component becomes an Error Boundary by defining either one or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
    Provide a way to gracefully handle error in application code. 

# What is High Order Component?
- A Higher-Order Component (HOC) is a pattern in React that allows us to reuse component logic by wrapping components with another component. HOCs are a powerful tool for code reuse, abstraction, and separation of concerns in React applications.

# What is ContextApi?
- The Context API is a feature in React that provides a way to pass data through the component tree without having to pass props manually at every level. It allows to share data between components at different levels of the component tree without the need to explicitly pass props through every intermediate component.
    ***The Context API consists of two main parts:***
    1. Context Object: A context object is created using the React.createContext() function. This context object represents the shared data that we want to make available to components within the context tree.

    2. Provider and Consumer Components: The context object provides a Provider component and a Consumer component. The Provider component is used to wrap a portion of the component tree and supply the context data to all descendant components. The Consumer component is used within descendant components to access the context data provided by the nearest Provider ancestor.

# What is code splitting?
- Code splitting is a technique used in web development to improve performance by splitting a large JavaScript bundle into smaller bundles or chunks. Instead of loading the entire JavaScript bundle when the web application is loaded, code splitting allows us to load only the necessary code for the current page or feature, reducing initial loading times and improving the overall user experience.
Eg: Lazy Loading.

# useCallback
useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
 
React useCallback hook returns a memoized function to reduce unnecessary callbacks. This useCallback hook is used when we have a component in which the child is rerendering again and again without need.

# Axios
Axios is a popular JS library used for making `http` requests in both browser and Node.js environments. It provides a simple and straight forward way to send and receive `http` requests, making it a valuable tool for working with web API's and servers.

# Custom Hook
React Custom Hooks are JavaScript functions starting with ‘use’ containing reusable logic.
Sometimes we make components that we have to reuse again and again in the application. In this case, we can convert the component to hooks by extracting logic from it. This self-made hook is known as Custom hook.

Creating custom hooks in React allows us to extract and reuse stateful logic across multiple components. Custom hooks are regular JavaScript functions prefixed with use, and they can call other hooks if needed. 

Custom hooks allow us to reuse stateful logic without changing our component hierarchy. They are a way to share logic between components without having to use higher-order components or render props.

# How we can create custom hook ?
Here's how we can create a custom hook:

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

# What is static type checking?
- Static type checking is a process used in programming languages to detect type-related errors in code at compile time, before the code is executed. The goal of static type checking is to identify potential type mismatches, inconsistencies, or errors in the codebase and prevent them from causing runtime errors or unexpected behavior.

In statically typed languages, each variable, parameter, function, and expression has a fixed type that is known at compile time. The compiler analyzes the code to ensure that types are used consistently and correctly throughout the program. If the compiler detects any type-related errors, it raises a compilation error or warning, alerting the developer to the issue.

#  What is the useReducer hook in react js ?
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

# What is use of StrictMode in react?
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

<!--
______________________________________________________________________________________________________ -->

