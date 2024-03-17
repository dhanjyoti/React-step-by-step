* cdn -> Content Delivery Network.
* Alternative of `npm` is `yarn`.
* package.json is the most important file in our react application.
* difference between package-lock.json & package.json
- package-lock.json keeps all the history of all the packages and controls them, (version control). It is very much detailed.
- package.json keeps the details of application that we are using. It keeps only the required dependencies.
* index.js is considered as the extry point of our react app.
* Why we ignore to push node_module in github? **->** It is the heaviest file in react application and it is regenerated again and again when we run npm/npx start so to save data and unwanted waste of time we avoid node_modules in github.
* Component is a piece of code that can be re-used, such as a function.
    Component types - Functional Component
                    - Class Component
                    - HOC(Higher Order Component)
                    - Pure Component
                    - Controlled Component
                    - Uncontrolled Component
* When we need to import only one component we used `export default` but if we pass many components then we use export and the component name.
* We use `state` to update the variables we used inside a component.
* We cannot use `state` outside of the component. `state` is public.
* If we need to pass any data from one component to another we use props, i.e, parent to child. It works as an intermediator between two components.
* we can also pass functions as a prop(lifting up state).
* we can also pass HTML in props, but we need to use this.children to do so.
* React.Fragment is a pattern to handle multiple components/elements.
* Lifting State-up -> passing data from child to parent component.
* Pure Component is feature, which we just need to import from React and use it. It works only inside Class components, for Functional components we have `memo`. Pure Components stops the re-rendering of the component.
* useMemo enhances the performances of the application. The way we use Pure Components in Class Components, we use useMemo inside Functional Components.
* Reason to use useMemo hooks, sometimes when we work with state and props, our component unwantedly updates again and again. To stop such situation we use useMemo. Another example - suppose we used a state and a function keeps calling again and again, in such situation we use useMemo.
* useRef directly manipulates the `dom`, so it is recommended to make less use of the useRef as possible, because it brings down the performance of the application. useRef should be used in emergency only.
* In functional components to handle `Dom` we use useRef.
* Controlled and uncontrolled components refers to the content in the input fields.
* In React when we control the input fields through the state is called Controlled components.
* Uncontrolled components are those input fields in react which we do not comtrol through states. It is either controlled through Javascript or by the use of useRef.
* Higher Order Component -> are those components which takes other components as props and returns other components.
* **Routing** -> For different functionalities we need different pages. So, we convert components to pages & we put links on them, so that for different functionality there forms a different page. Now we can open them through specific URLs. This is called routing.
* We use `Link` from react-router-dom instead of `href` because it helps us render the page without reloading, whereas, using `href` will surely reload the page.
* API -> Application Programming Interface, we cannot directly connect or interact to the database through react, so we need some server-side programming language which provides us APIs to connect to the database. These helps us to fetch data from the database for us to use. It comes in the form of JSON format. Now we can use those data to show in the UI or frontend.

* GET - when we need to show the data, we use GET method.
* POST - when we need to store the data, we use POST method.
* PUT - when we need to update the data, we use PUT method.
* DELETE - when we need to delete the data, we use DELETE method.


Node js ->
**Core modules** -> There are some basic features in programming language, which are in-build from before and we can use them whenever needed. These are called `core modules`.