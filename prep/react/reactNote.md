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



 


