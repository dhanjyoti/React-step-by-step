





# Why we install react-router-dom in React.js? 
-> We need react-router-dom to add routing and navigation capabilities to our React application. React Router is a popular library for handling client-side routing in single-page applications (SPAs) built with React.

# Props -> 
"props" is a shorthand for "properties," and it is a mechanism for passing data from a parent component to a child component. Props allow us to pass values, functions, or any data from one component to another, enabling communication between components in a React application.


                    Chapter 1 - Why React?

# Advantages/Characteristics-
1. ***Component-Based Architecture:***
- React promotes a modular and component-based architecture, where we can break 
down our user interface into small, reusable pieces called components.
- This modularity improves code organization, reusability, and maintainability, 
making it easier to build and maintain complex applications.

2. ***Virtual DOM(Document Object Model):***
- React introduces a Virtual DOM, which is a lightweight copy of the actual DOM. 
It allows React to efficiently update and render changes to the user interface.
- By minimizing direct interactions with the actual DOM, React significantly 
improves performance, leading to faster and more responsive applications.

3. ***Declarative Syntex:***
- React uses a declarative syntax, meaning we describe what we want the 
UI to look like, and React takes care of updating the UI to match that description.
- This leads to more predictable and easier-to-understand code compared to 
imperative approaches.

4. ***Efficient Updates:***
- React efficiently updates only the parts of the UI that have changed, thanks
 to its reconciliation algorithm and the Virtual DOM.
- This reduces unnecessary re-renders and improves application performance.

5. ***Larger Ecosystem and Community:*** 
- React has a vast ecosystem of libraries, tools, and extensions, making it easy 
to integrate with other technologies and solve various development challenges.
- A large and active community provides extensive support, resources, and documentation
 for developers.

6. ***One-Way Data Flow:***
- React enforces a one-way data flow, which simplifies debugging and helps prevent 
common data-related bugs by ensuring that data flows in a single direction.
- This pattern improves code predictability and maintainability.

7. ***Server-Side Rendering(SSR) and Isomorphic Apps:***
- React supports server-side rendering, allowing us to render components on the server
 and send pre-rendered HTML to the client.
- This benefits SEO, performance, and user experience, especially for single-page 
applications (SPAs).

8. ***React Native for Mobile Development:***
- React Native extends the React paradigm to mobile app development, enabling us to use
 the same skills and codebase to build native iOS and Android applications.
- This leads to faster development and code sharing between web and mobile platforms.

9. ***Strong Developer Tools:***
- React comes with a set of developer tools (e.g., React DevTools) that make it easier to 
inspect and debug React applications.
- These tools help developers identify performance bottlenecks and track component behavior.

10. ***Community and Industry Adoption:***
- React has gained widespread popularity and is used by many large companies and
 organizations, ensuring its long-term viability and industry support.

* To start React we use `npx create-react-app app-name`
npx - to run package.json script
create-react-app - toolchain
app-name - name of our react file

* index.html inside the public folder is the Single-Page-Application

# Assignment 1:
If we delete node_modules. How to run our app again successfully ?

Open our Terminal/Command Prompt:
Open the terminal or command prompt on our computer.

Navigate to our React Project Directory:
Use the cd (change directory) command to navigate to the root directory of our React project.
1. cd path/to/our/react/project

Initialize a New package.json File:
If you don't have a package.json file already, you can create one using the following command:
2. npm init -y

Install Dependencies:
Use the npm install command to reinstall all the dependencies listed in our package.json file.
 Since you deleted the node_modules folder, you need to reinstall the dependencies:
3. npm install

Start our React App:
Once the dependencies are installed, you can start our React app as usual:
4. npm start

                    Chapter 2 - Components

In React, components are the functional building blocks of a user interface(UI). They 
encapsulate a piece of the UI's functionality and appearance, allowing us to create modular,
reusable, and maintainable code. Components are like reusable custom HTML elements with their
own behaviour and styling.

* Function is used as a Tag in React
* Always use Camel Case in JSX

1. 

2. 


                    Chapter 3 - Conditional Rendering
                    
Conditional rendering in React allows us to display different content or components
based on certain conditions or criteria. We can use JavaScript expressions or
conditional statements to determine what should be rendered in our React components.
    Here are some common patterns for conditional rendering in React:

1. ***Using Ternary Operators:***

function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}
In this example, the isLoggedIn prop is used to conditionally render a welcome message or
a login prompt.

2. ***Using Logical && Operator:***

Note:: This method should not be used in case of Numbers as it might mis-identify the
result with `0` and `1`.

function App({ isLoading }) {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>Content Loaded</p>}
    </div>
  );
}
Here, the isLoading prop is used to conditionally render a loading message. 
If isLoading is true, the `loading` message is displayed; otherwise, the `content` is displayed.

3. ***Using Conditional Statements:***

function App({ isMobile }) {
  if (isMobile) {
    return <p>This is a mobile device.</p>;
  } else {
    return <p>This is not a mobile device.</p>;
  }
}
In this case, the isMobile prop is used to determine which message to render using 
a traditional if-else statement.

4. ***Using a Function:***
We can create a separate function to handle conditional rendering:

function Message({ isMorning }) {
  function getMessage() {
    if (isMorning) {
      return <p>Good morning!</p>;
    } else {
      return <p>Good evening!</p>;
    }
  }

  return <div>{getMessage()}</div>;
}
In this example, the getMessage function is responsible for determining the message based
 on the isMorning prop.

5. ***Using the Map Function:***
If you have an array of items to render conditionally, you can use the map function to 
render them based on a condition:

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.isCompleted ? 'Done' : 'Not Done'}</li>
      ))}
    </ul>
  );
}
In this example, each item in the items array is rendered conditionally based on its
isCompleted property.


# `Key` 
-> In React, a key is a special attribute that we can include when rendering a list
 of elements, such as an array of components or DOM elements. The key is used by React to 
 help it identify each element in the list uniquely and efficiently update the list when 
 changes occur. `Keys` are essential for optimizing the rendering performance and behavior of lists in React.

Here are some key points to understand about `keys` in React:

Uniqueness: `Keys` must be unique among the siblings of the same parent. In other words, 
within a list of elements, each key should be different.

Stability: React expects `keys` to be stable across re-renders. This means that the key of 
an element should not change between renders, especially if the element retains its position 
in the list.

Performance: `Keys` help React identify which elements have changed, been added, or been removed 
in a list. This allows React to update the DOM efficiently by reusing existing elements and 
minimizing re-rendering.

Reconciliation: React uses `keys` to perform a process called "reconciliation," which determines 
how to update the UI when the underlying data changes. `Keys` help React maintain a mapping 
between the elements in the virtual DOM and their corresponding elements in the real DOM.

                    Chapter 4- Events

# 1. Events 
-> In React, `Events` are interactions or actions that occur in the user interface, 
such as clicks, keystrokes, and mouse movements. React provides a way to handle these events using event handlers or event listeners. Event handling in React is similar to handling events in traditional JavaScript, but with some key differences due to React's synthetic event system and its one-way data flow.

Here are the fundamental concepts of handling events in React:

Event Handlers: Event handlers are functions that are called in response to a specific event. 
In React, event handlers are typically defined as methods within a component's class or as arrow 
functions in functional components.

Event Syntax: In JSX, you use camelCase event names, such as onClick or onKeyDown, instead of 
lowercase event names like onclick or onkeydown in traditional HTML.

Passing Event Handlers: To associate an event handler with a DOM element, you pass it as a prop. 
For example, to handle a click event, you pass an onClick prop to an element.

Event Object: React uses a synthetic event system that wraps the native browser events and 
provides a consistent API across different browsers. The event object passed to event handlers 
in React is a synthetic event with properties and methods similar to the native event object.

# 2. Event Bubbling 
-> Event bubbling is a concept in React and other web development frameworks 
that describes the order in which events are handled when multiple elements within the DOM 
hierarchy are nested and an event is triggered on one of them. In event bubbling, the event 
starts from the innermost (target) element and "bubbles up" to the outermost (root) element.

Here's how event bubbling works in React: 

* When an event (e.g., a click event) occurs on an element, such as a button or a div, React 
processes the event by invoking the associated event handler (e.g., onClick).

* After handling the event on the target element, React allows the event to propagate up the 
DOM tree. This means that the same event is triggered on each ancestor element of the target 
element, one after another, in a hierarchical order.

* Each ancestor element can have its event handlers, and if they are defined, they will also 
be called in the order of the event propagation.

* Event propagation continues until it reaches the root of the DOM tree (usually the <html> 
or <body> element), or until one of the event handlers explicitly stops further propagation 
using the stopPropagation method on the event object.

`Note` -> Event bubbling in React is not a problem to be solved but rather a natural behavior 
of the DOM and React's event handling system. It allows us to capture and handle events at 
different levels of our component hierarchy. However, if we want to prevent an event from 
bubbling up to parent elements or siblings, we can use the `stopPropagation` method on the 
event object.

# 3. `stopPropagation` -> 
In React, `.stopPropagation()` is not a specific React method but rather a method provided 
by the event object, typically referred to as `event` or `e`. It is not specific to React but 
is a part of the standard event handling in JavaScript and the DOM (Document Object Model).

The `.stopPropagation()` method is used to prevent the further propagation of an event in 
the DOM hierarchy. When an event occurs on an element, such as a button or a div, it can 
"bubble up" the DOM tree, triggering event handlers on parent elements or other elements 
in the hierarchy. Calling .stopPropagation() inside an event handler stops this propagation, 
ensuring that the event does not reach other elements.

                ##    Hooks    ##

In React.js, `Hooks` are functions that allow us to add state and other React features to 
functional components. Prior to hooks, state and lifecycle features were only available in
class components. The introduction of hooks in React 16.8 revolutionized the way
developers manage state and side effects in functional components. Hooks make it possible
to reuse stateful logic without changing our component hierarchy.

# There are several built-in hooks in React, each serving a specific purpose. 
Here are some of the most commonly used hooks:

1. `useState`: This hook allows functional components to manage local state. It returns an
 array with the current state value and a function to update it.

Eg-
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

2. `useEffect`: useEffect enables us to perform side effects in our functional components. 
It's commonly used for data fetching, DOM manipulation, or any operation that needs to occur 
after rendering.

Eg-
import React, { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Perform data fetching here, and update the state when data is received
    fetchData().then((result) => setData(result));
  }, []); // The empty array means this effect runs once (on mount)

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

3. `useContext`: useContext allows us to access the context data provided by the nearest 
Context Provider ancestor in the component tree.

Eg-
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const contextData = useContext(MyContext);

  return <p>{contextData}</p>;
}

4. `useReducer`: useReducer is often used as an alternative to useState when we have 
complex state logic. It manages state by dispatching actions to a reducer function.

Eg-
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

5. `useMemo` and `useCallback`: These hooks are used for performance optimization by 
memoizing values and functions to prevent unnecessary re-computation.

Eg-
```jsx
import React, { useMemo, useCallback } from 'react';

function MyComponent({ data }) {
  const processedData = useMemo(() => processData(data), [data]);

  const handleClick = useCallback(() => {
    // Handle click event
  }, []); // Empty dependency array to memoize the function

  return (
    <div>
      <p>{processedData}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

**Problem 6**. `useRef`: useRef is used to create mutable references that persist across renders. 
It's often used to access and interact with DOM elements directly.

**Solution**: 
```jsx
import React, { useRef, useEffect } from 'react';

function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

                    These are some of the most commonly used hooks in React, but there are 
additional hooks like useLayoutEffect. 
useLayoutEffect and custom hooks that we can create to encapsulate and reuse stateful logic
in our components. React hooks have significantly improved the developer experience and made 
it easier to work with functional components in a more powerful and flexible way.

                    Chapter 5-State










# Later Concept::

Event Delegation::->

Event delegation is a common pattern in web development where a single event listener is 
placed on a parent element to manage events for its child elements. This is useful for 
efficiently handling events on multiple child elements without attaching individual event 
listeners to each of them. In React, we can implement event delegation just like we would 
in vanilla JavaScript, but we can also take advantage of React's synthetic event system. 
Here's how to use event delegation in React:

Parent Component:

Create a parent component that wraps the elements we want to delegate events for. 
This parent component will have a single event listener to handle events for its children.


```jsx
import React from 'react';

function ParentComponent() {
  const handleClick = (event) => {
    // Handle the event here
    if (event.target.tagName === 'BUTTON') {
      console.log('Button clicked:', event.target.textContent);
    }
  };

  return (
    <div onClick={handleClick}>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
}

export default ParentComponent;
```
In this example, the ParentComponent wraps three buttons, and it listens for click 
events on the div element.

Event Handling:

The handleClick function checks the event.target to determine which child element 
was clicked. In this case, it checks if the target's tagName is 'BUTTON'. We can 
add more specific checks based on your needs.

This is where you can perform any custom logic, such as calling functions, updating 
state, or dispatching actions, based on the event and the target element.

Render the Parent Component:

Render the ParentComponent as part of your React application, and it will delegate 
events to its child elements.

jsx
Copy code
import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div>
      <h1>Event Delegation in React</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
By setting up the event listener on the parent element (<div>) and then checking the 
event.target, we effectively delegate the click event handling to the specific child 
elements within ParentComponent. This pattern can help improve performance when handling 
events on a large number of child elements or dynamically generated content.


Interceptor ::->
In the context of React, an interceptor is a concept often used when dealing with HTTP 
requests and responses. Interceptors are functions or middleware that allow us to 
intercept, inspect, and potentially modify requests and responses as they pass through 
the application.

Interceptors are typically used with libraries like Axios, which is a popular JavaScript 
library for making HTTP requests in React applications. Here's how interceptors work 
in this context:

Request Interceptors: Request interceptors allow you to modify outgoing HTTP requests 
before they are sent to the server. You can use request interceptors to add headers, 
authentication tokens, or other information to the request.

Response Interceptors: Response interceptors allow you to intercept and process incoming 
HTTP responses before they are delivered to the requesting code. This can be used for 
error handling, data transformation, or other post-processing tasks.

Here's an example of using interceptors with Axios in a React application:

javascript
Copy code
import axios from 'axios';

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it
    // For example, add an authentication token
    config.headers.Authorization = 'Bearer YOUR_TOKEN';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    // Process the response before returning it
    return response.data;
  },
  (error) => {
    // Handle errors, such as authentication failures or network issues
    return Promise.reject(error);
  }
);
In this example:

The request interceptor adds an authentication token to the request headers.
The response interceptor processes the response data and handles any errors.
Interceptors can be particularly useful for implementing global error handling, 
logging, authentication, and other cross-cutting concerns in your React application. 
They provide a centralized way to manage behavior for all HTTP requests and responses.

It's important to note that while Axios was used in this example, the concept of 
interceptors can apply to other HTTP request libraries and contexts as well.




