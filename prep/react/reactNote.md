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
    4. React depends on external libraries for amny complex features, so developer has to write many lines of code for complex functionalities.
    5. React is simple to learn and more popular then Angular.
- Angular ->
    1. Angular is a complete framework.
    2. Angular uses a real DOM.
    3. Angular is bigger because it is a complete framework.
    4. Since Angular is a complete framework, therefore it provide built-in support for features like routing, forms, validation, and HTTP requests.
    5. Angular is slightly difficult to learn as it has Typescript, OOPS concept and many more things.

# Name 5 JS frameworks other than React?
- Angular, Vue.js, Angular JS, Backbone .js, Ember.js

# Whether React is a Framework or a Library? What is the difficult?
* Library: Developers import the libraries at the top and then used its functions in components. React is commonly referred to as a Javascript library.
* Framework: Developers need to follow a specific structure or pattern defined by the framework. Angular is a framework.

# How React provides Reusability and Composition?
* React provides reusability and composition through its component-based architecture.
