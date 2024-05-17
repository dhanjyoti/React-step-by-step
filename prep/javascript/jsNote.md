**Javascript** 
Javascript is a cross-platform, object oriented scripting language used to make webpages interactive( eg., having complex animations, clickable buttons,  pop-up menus, etc ).
It is also synchronous single-threaded language, meaning Javascript can execute only one code of line at a time and in a spectfic order.

**Javascript Engine**
A javascript engine is a program present in web browsers that executes Javascript code.

# What is Client side and Server side?
**Client side**
A client is a device, application, or software component that requests and consumes services or resources from a server.
**Server side**
A server is a device, computer, or software application that provides services, resources, or functions to clients.

# What is Scope in Javascript?
Scope determines where variables are defined and where they can be accessed.
There are 3 types of scope - global, function & local or blocked.
Global scope - where we define the variabe at top of the program.
Function scope - variables that defined inside the function.
Local or Blocked scope - Here the variable is defined inside the `if` block or `else` block or any other block.

# What is the type of a variable in JS when it is declared without using the var, let or const keywords?
`var` is the implicit type of variable when a variable is decalared without var, let or const keywords.

**Hoisting**
Hoisting is a Javascript behavior where functions and variable declaratons are moved to the top of their respective scopes during the compilation phase.

Hoisting is a phenomena in Javascrpt by which we can access variables 
    and functions, even before we initialize it or we have put some value in it.
    We can access the variables without any error.  

Eg: In case of single variable the output will be undefined. 
    In case of proper function declaration it will show us the result. 
    in case of only function name without the paranthesis
    it will show us the whole function code.
    In case the function is an arrow function it will give us
    an error "_____ is not a function". As arrow function behaves
    just like a variable. & undefined is the result if we pass only 
    the name just like another variable.

- We can invoke functions even before initializing it.

**JSON**
JSON(Javascript Object Notation) is a lightweight data interchange format. JSON consists of key-value pairs.
Whenever we send data to the API or some request to the API, that API mostly receives the data and send back the response data as JSON format. So basically it's a language by which the UI and the web API will communicate.

# What are variables? What is the difference between var, let and const?
Variables are used to store data.
- var creates a function-scoped variable.
- let creates a block-scoped variable.
- const can be assigned only once, and its value cannot be changed afterwards.

# What are data types in JS?
A data type determines the type of variable.

# What is the difference between primitive and non-primitive data types?
- Primitive data type ->
    1. Primitive data types can hold only single value.
    2. Primitive data types are immutable, meaning their values, once assigned, cannot be changed.
    3. Primitive data types are simple data types.
- Non-Primitive data type ->
    1. Non primitive data types can hold multiple values.
    2. They are mutable and their values can be changed.
    3. Non primitive data types are complex data types.

# What is difference between null and undefined in JS?
Undefined - When a variable is declared but has not been assigned a value, it is automatically initialized with `undefined`. `undefined` can be used when we don't have the value right now, but we will get it after some logic or operation.

Null - `null` variables are intentionally assigned the `null` value. `null` can be used, when we are sure we do not have any value for the particular variable.

# What is the use of typeOf operator?
`typeOf` operator is used to determine the type of each variable.
Real application use -> `typeOf` operator can be used to validate the data received from external sources(api).

# What is type-coercion in JS?
Type coercion is the automatic conversion of values from one data type to another during certain operations or comparisons.
- Uses of type-coercion:
    1. Type-coercion can be used during String and Number concatenation.
    2. Type-coercion can be used while using Comparison operators.

# What is Tree Shaking in JS?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

# What are operators precedence?
As per operator precedence, operators with higher precedence are evaluated first.

# What is the difference between unary, binary and ternary operators?
let a = 10;
let b = 20;
unary - let x = a;
binary - let x = a + b;
ternary - let result = condition ? "yes" : "no"

# What is short-circuit evaluation in JS?
Short-circuit evaluation stops the execution as soon as the result can be determined without evaluating the remaining sub-expressions.

Eg: let result = false && someFunction();
    console.log(result);

    If any one is false, it is false. Vice-versa in case of true also.

# What are tyes of conditions statements in JS?
    1. if/else statements
    2. ternary statements
    3. switch statements

# What is the difference between == and ===?
`==` -> Loose Equality(==) operator compares two values for equality after performing type corecion. 
`===` -> Strict Equality(===) operator compares two values for equality without performing type coercion.  

# What is the difference between Spread and Rest operator in JS?
-> The `spread operator`(...) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.
Uses - Copying an array, merging array, passing multiple arguments to a function.

-> The `rest operator` is used in function parameters to collect all remaining arguments into an array.

# What is an array in JS? How to get, add and remove elements from arrays?
An array is a data type that allows us to store multiple values in a single variable.
Get - indexOf(), find(), fliter(), slice()
Add - push(), concat()
Remove - pop(), shift(), splice()
Modify - map(), forEach()
Others - join(), length, sort(), reverse(), reduce(), some(), every()

# What is the indexOf() method of an array?
indexOf() method gets the index of a specified element in the array.

# What is difference between find() and filter() methods of an Array?
find() -> method get the first element that satisfies a condition.
filter() -> method get an array of elements that satisfies a condition.

# What is the slice method of an array?
slice() -> method get a subset of the array from start index to end index(end not included);

# Difference between push() and concat() method.
push() -> it will modify the original array itself.
concat() -> it will create a new array and not modify the original array.

# Difference between pop() and shift() method.
pop() -> it will remove the last element of the array.
shift() -> it will remove the first element of the array.

# What is the splice method of an array?
splice() -> it is used to add, remove or replace elements of an array.

# What is the difference between slice() and splice() methods in an array.
slice() method is used to get a subset of an array from the start index to the end index(end not included).
splice() method is used to add, remove and replace element in an array.

# Difference between map and forEach method.
map() method is used when we want to modify each element of an array and create a new array with the modified values.
forEach() method is used when we want to perform some operation on each element of an array without creating a new array.

# What is array destructuring in JS?
Array destructuring allows us to extract elements from an array and assign them to individual variables in a single statement.
It was introduced in ECMAScript 6(ES6).

# What are array-like objects in javascript?
Array-like objects are objects that have indexed elements and a length property, similar to array, but they may not have all the methods of arrays like push(), pop() & others.

# How do you convert an array-like object into an array.
- Methods
    1. Array.from()
    2. Spread syntax(...)
    3. Array.prototype.slice.call()

# What is a loop? What are the types of loops in JS?
A loop is a programming way to run a piece of code repeatedly until a certain condition is met.
Eg:- for, while, do-while, for-in and for-of

# What is the difference between while loop and for loop?
For loop - It allows to iterate a block of code a specific number of times. For loops are better for conditions with initialization and with increment because all can be a set in just one line of code.

While loop - executes a block of code while a certain condition is true. While loop is better when there is condition, no initialization, no increment.

# What is the difference between while and do-while loop?
While loop - It executes a block of code while a condition is true.

Do-while loop - It is similar to the while loop, except that the block of code is executed atleast once, even if the condition is false.

# What is the difference between break and continue statement?
Break statement - It is used to terminate the loop.

Continue statement - It is used to skip the current iteration of the loop and move on to the next iteration.

# What is the difference between for and for-of loop in JS?
for loop is slightly more complex having more lines of code. Whereas, for-of is much simpler and better for iterating arrays, for-of is generally used to iterate strings.

# What is the defference between for-of and for-in loop?
for-of - It is used to loop through the values of array or string. It allows us to access each value directly, without having to use an index.

for-in - It is used to loop through the properties of an object. It allows us to iterate over the keys of an object and access the values associated by using keys as the index.

# What is forEach method? Compare it with for-of and for-in loop?
forEach is a method available on arrays and object that allows us to iterate over each element of the array and perform some action on each element.     

# When to use the for-of loop and when to use the forEach loop method in applications?
for-of loop is suitable when we need more control over the loop, such using break statement or continue statement inside.  

forEach method iterates over each element of the array and perform some action on each element.

# What are functions in JS? What are the types of function.
A function is a reusable block of code that performs a specific task.
Eg: Named funciton, Anonymous function, function expression, Arrow function, IIFE, Callback function and Higher-Order-Function.

# What is the difference between Named and Anonymous function? When to use what?
Named functions have a named identifier. Use it in big and complex applications. Use it when we want to reuse one function at multiple places.
Anonymous functions do not have name identifiers and cannot be referenced directly by name. Use it for small logics. Use it when we want to use a function only a single time.

# What is a function expression in JS?
A function expression is a way to define a function by assigning it to a variable.

# What are arrow function? What is its use?
Arrow function also known as fat arrow functions, is a simpler and shorter way for defining functions in JS.

# What are callback functions? Its use.
A callback function is a function that is passed as argument to another function.

# Higher Order Function
* 2 points -
    1. Takes one or more functions as arguments(callback function)  Or
    2. Returns a function as result.

# Difference between arguments and parameters.
Parameters are the placeholders defined in the function declaration.
Arguments are the actual values passed to a function when it is invoked or called.

# In how many ways you can pass arguments to a function.
In JavaScript, we can pass arguments to a function in several ways:
1. Passing arguments by value: 
2. Passing arguments by reference:
3. Using the arguments object: 
4. Using the rest parameter syntax: 

# How do you use default parameters in a function.
In Javascript, default parameters allows us to specify default values for function parameters.

# What is the purpose of event handling in JS?
Event handling is the process of responding to user actions in a web page.
The addEventListner method of javascript allows us to attach an event name and the function we want to perform on that event.

# What are first-class functions in JS?
A programming language is said to have first-class functions if functions in that language are treated like other variables.

# Pure and impure function in JS.
A pure function is a function that always produces the same output for the same input. Pure functions cannot modify the state. Pure functions cannot have side effects.
An impure function can produce different outputs for the same input. Impure functions cannot modify the state. Impure functions can have side effects.

# Function Currying in JS.
Currying in JS transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
Advantages: Reusability, modularity and specialization, Big, complex function with multiple arguments can be broken down into small, reusable functions with fewer arguments.

# What are call, apply and bind in JS?
These methods in JS are used to work with functions and control how they are invoked and what context they operate in. These methods provide a way to manipulate the `this` value and pass arguments to functions.

# String
A string is a data type used to store and manipulate data.

# Template literals and string interpolation in strings.
A template literal, also known as a template string, is a feature introduced in ECMAScript 2015(ES6) for string interpolation and multiline strings in Javascript.

# Difference between single quotes(''), double quotes("") & backticks(``).

# What are some important string operations in JS?
substr(), subtring(), replace(), search(), toLocaleLowerCase(), toLocaleUpperCase(), indexOf(),  includes(), slice(), concat(), lastIndexOf(), charCodeAt(), trim(), charAt(), valueOf(), split(), toString(), match().

# String immutability
Strings in Javascript are considered immutable because we cannot modify the contents of an exiting string directly.

# In how many ways we can concatenate strings?
- 4 ways:
    1. +Operator
    2. Concat() method
    3. Template literals
    4. Join() method

# What is DOM? What is the difference between HTML and DOM?
The DOM(Document Object Model) represents the web page as a tree-like structure that allows Javascript to dynamically access and manipulate the content and structure of a web page.

# How do you select, modify, create and remove DOM elements?
$$DOM-Methods$$

- Selecting DOM elements-
getElementById(id), querySelector(selector), querySelectorAll(selector), getElementsByClassName(className), getElementsByTagName(tagName), getElementsByName(name)

- Modify element properties and attributes-
textContent, innerHTML, setAttribute(name, value), removeAttribute(name), style.property

- Creating & appending elements-
createElement(tagName), appentChild(node), cloneNode(deep)

- Removing elements-
remove(), removeChild(node)

- Adding & removing event listeners- 
addEventListener(type, listener), removeEventListener(type, listener)

# What are selectors in JS?
Selectors in JS help to get specific elements from DOM based on Ids, class names, tag names.
- DOM Selector methods:
getElementById(id), querySelector(selector), querySelectorAll(selector), getElementsByClassName(className), getElementsByTagName(tagName)

# Difference between getElementById, getElementsByClassName & getElementsByTagName?

# Difference between querySelector() & querySelectorAll()?

# What are the methods to modify elements properties and attributes?
- DOM methods for modifying elements and their properties-
textContent, innerHTML, setAttribute(), removeAttribute(), style.property, classList.add()

# Difference between innerHTML and textContent.


# How to add & remove properties of HTML elements in the DOM using JS?
setAttribute() & removeAttribute()

# How to add & remove style from HTML elements in DOM using JS?
style.setProperty & classList.add()

# How to create new elements in DOM using JS? Difference between createElement() and cloneNode().
createElement() & cloneNode()

# Difference between createElement() & createTextNode().


# What is Error Handling in JS?
Error handling is the process of managing errors.

# What is the role of finally block in JS?
Finally block is used to execute some code irrespective of some error.

# What is the purpose of throw statement in JS?
The throw statement stops the function of the current function and passes the error to the catch block of calling function.

# What is error propagation in JS?
Error propagation refers to the process of passing or propagating an error from one part of the code to another by using the throw statement in try catch.

# What are the best practices for error handling?
-   1. Use try catch and handle errors appropriately.
    2. Use descriptive error messages.
    3. Avoid swallowing errors.
    4. Lof errors.

# What are the different types of errors in JS?
Syntax error, reference error, type error and range error.

# What is objects in JS?
An object is a data type that allows us to store key-value pairs.

# In how many ways we can create an object?
3 ways - object literal, object constructor and Object.create() method

# What is the difference between an array and an object?
**Array** - 
-   1. Arrays are collection of values.
    2. Arrays are denoted by square bracket[].
    3. Elements in array are ordered.
**Object** -
-   1. Objects are collection of key-value pairs.
    2. Objects are denoted by curly braces.
    3. Properties in objects are unordered.

# How to add, modify or delete properties of an object.

# Difference between dot notation and bracket notation.
Both are used to access properties or methods of an object.
Dot notation is more popular and used due to its simplicity.
Limitaion of Dot notation - In some scenerios bracket notation is the only option, such as when accessing properties when the property name is stored in a variable.

# What are some common methods to iterate over the properties of an object?
4 ways to iterate over the properties of an object -
 * for ...in loop
 * Object.key() & forEach()
 * Object.values() & forEach()

# How do you check if a property exists in an object.
    in operator, hasOwnProperty() method & comparing property with undefined

# How do you clone or copy an object.
Ways to clone or copy an object - 
    * Spread syntax
    * Object.assign()
    * JSON.parse() & JSON.stringify()

# What is the difference between deep copy and shallow copy in JS?
Shallow copy is nested objects case will modify the parents object property value, if cloned object property value is changed. But deep copy will not modify the parent object property value.

# What is set Object in JS?
The set object is a collection of unique values, meaning that duplicate values are not allowed.
Set provides methods for adding, deleting and checking the existance of the values in the set.
Set can be used to remove duplicate values from the array.

# Map Object in JS.
The Map Object is a collection of key-value pairs where each key can be of any type, each value can also be of any type. A Map maintains the order of key-value pairs as they were inserted.

# Defference between Map and Object in JS.
Map -
    1. Keys in map can be of any data type, including strings, numbers, objects, functions, etc.
    2. A map maintains the order of key-value pairs as they were inserted.
    3. Useful when keys are of different types, insertion order is important.
Javascript - 
    1. Keys are in regular JS object are limited to strings and symbols.
    2. In a regular objects, there is no guaranteed order of keys.
    3. Useful when keys are strings or symbols and there are simple set of properties.

# What are events? How are events triggered.
Events are actions that happen in the browser, such as a button click, mouse movement or keyboard input.

# What are the types of events in JS?
Click Event: addEventListener('click', handler)
Mouseover Event: addEventListener('mouseover', handler)
Keydown Event: addEventListener('keydown', handler)
Keyup Event: addEventListener('keyup', handler)
Submit Event: addEventListener('submit', handler)
Focus Event: addEventListener('focus', handler)
Blur Event: addEventListener('blur', handler)
Change Event: addEventListener('change', handler)
Load Event: addEventListener('load', handler)
Resize Event: addEventListener('resize', handler)

# What is Event Object in JS?
Whenever any event is triggered, the browser automatically creates an event object and passes it as an argument to the event handler function.
The event object contains various properties and methods that provide information about the event, such as the type of event, the element that triggered the event etc.

# What is Event Delegation in JS?
Event delegation in Javascript is a technique where we attach a single event handler to a parent element to handle events on its child elements.

# Event Bubbling
Event bubbling is the process in JS where an event triggered on a child element propagates up the DOM tree, triggering event handlers on its parent elements.

# How can you stop event propagation or event bubbling in JS?
Event bubbling can be stopped by calling stopPropagation() method on event.

# Event Capturing
Event capturing is the process in JS where an event is handled starting from the highest-level ancestor(the root of the DOM tree) and moving down to the target element.

# What is the purpose of the event.preventDefault() method in JS?
The event.preventDefault() method is used to prevent the default behavior of an event and the link click will be prevented.

# What is the use of 'this' keyword in the context of event handling in JS?
'this' keyword refers to the element that the event handler is attached to.

# How to remove an event handler from an element in JS.
removeEventListener() method is used to remove event handler from element.

# What are iterators amd generator functions?



# Object Oriented Programming

Object-Oriented Programming is a programming style based on classes and objects. These group data(properties) and methods(actions) inside a box.

Oops was developed to make code more flexible and methods(actions) inside a box.

Javascript is prototype-based procedural language, which means it supports both functional and object-oriented programming.

***What is a Class?***
A class is like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like a template for an object.

We can create classes using the class keyword which is reserved keyword in Javascript. Classes can have their own properties and methods.

***What is an Object***
In Oops an object is an instance of a class.

**There are four main principles in Oops/four main pillers of Oops**
    1. Abstraction
    2. Encapsulation
    3. Inheritance
    4. Polymorphism

-   1. Abstraction: 
    Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions. 

    In other words, Abstraction is the process of showing only essential/necessary features of 
    an entity/object to the outside world and hide the other irrelevent information.

    For Example:- to open our TV we only have a power button. It is not required to understand how infra-red waves are getting generated in TV remote control.

    2. Encapsulation:
    Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

    In other words, Encapsulation means wrapping up data & member function(Method) together into 
    a single unit i.e, class.

    3. Inheritance:
    Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.

    In other words, Inheritance allows a class(subclass) to acquire the properties and behaviour of another class(super-class). It helps to reuse, customize and enhance the existing code. So, it helps to write a code accurately and reduce the development time.

    4. Polymorphism:
    Polymorphism means having different and 'many forms'. A subclass can define its own unique behaviour and still share the same functionalities or behaviour of its parent/base class.

```js
    class square(){                     |   class circle(){}
        area();                         |       area();   
    }                                   |   }
                                        |
    Var S1 = new square();              |   Var C1 = new circle();
    S1-> area();                        |   C1-> area();
```

**Object-Oriented Programming in JavaScript**
OOP in JavaScript is bit different. We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).

# What is Prototypal Inheritance in JavaScript?
We have already used Prototypal Inheritance without knowing it – for example, we used methods on arrays like push(), pop(), map() and so on (which are available on all arrays).

Array.prototype.map() because Array.prototype is a prototype of all array objects that we create in JavaScript. This is an example of prototypal inheritance.

# How to Implement Prototypal Inheritance in JavaScript?
There are three main ways to implement Prototypal Inheritance in JavaScript:
    1. Using Constructor Functions
    2. Using ES6 Classes
    3. Using Object.create()

# 1.How to Implement Prototypal Inheritance with Constructor Functions in JavaScript?
We start the name of a constructor function with capital letter (standard convention).
```js
    function User(name){
        this.name = name;
        console.log(this);
    }
    User.prototype.printName = function(){
        console.log(this.name)
    }
    let kedar = new User("kedar");
    kedar.printName();
```
We can access the prototype of the constructor function with the following syntax:
```js
    console.log(kedar.__proto__ === User.prototype) 
    // True

    console.log(User.prototype.isPrototypeOf(kedar))
    // True
```
# How to Implement Prototypal Inheritance with ES6 Classes in JavaScript?
We can implement OOP using classes, but behind the scenes it uses prototypal inheritance. This method was introduced to make sense to people coming from other languages like C++ and Java.
```js
    class User{
        constructor(name){
            this.name = name
        }
        
        printName(){
            console.log(this.name);
        }
    }

    const kedar = new User("kedar")
```

* 3 things to remember about classes:
    1. Classes are not hoisted
    2. Classes are first-class citizens (If a programming language has the ability to pass a function as an argument – to treat functions as values and to return functions – it is said that the language has first-class functions and those function are called first-class citizens)
    3. Classes are executed in strict mode. 

# How to Implement Prototypal Inheritance with Object.create() in JavaScript?
The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
```js
    const User = {
        printName(){
            console.log(this.name);
        }
    }
    let properties = {
        name: {
            value:"John"
        }
    }
    let John = Object.create(User,properties)
    John.printName()
```

# Inheritance 
The concept of inheritance in JavaScript allows the child class to inherit the properties and methods of the parent class.
    Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.
    In other words, Inheritance allows a class(subclass) to acquire the properties and behaviour of another class(super-class). It helps to reuse, customize and enhance the existing code. So, it helps to write a code accurately and reduce the development time.

* Benefits of Inheritance
    * Code reusability − The child class can inherit the properties of the parent class. So, it is the best way to reuse the parent class code.
    * Functionality extension − We can add new properties and methods to extend the parent class functionality in each child class.
    * Code maintenance − It is easier to maintain a code as we can divide the code into sub-classes.
    * Multilevel and hierarchical inheritance allows us to combine data together.

**How Inheritance Works in JavaScript**
    Inheritance enables us to define a class/object that takes all the functionality from a parent class/object and allows us to add more. Using class inheritance, a class/object can inherit all the methods and properties of another class. It is a useful feature that allows code reusability.

**Types of Inheritance in JavaScript**
    * Prototypal Inheritance - Prototypal inheritance is a type of inheritance that adds new properties and methods to an existing object.
    * Pseudo-classical Inheritance - Psuedoclassical inheritance is similar to prototypal inheritance. ...
    * Functional Inheritance.
____________________________________________________________________________________

1. What is a DOM ?
->  The Document Object Model (DOM) is a programming interface for web documents. 
    It represents the structure of an HTML or XML document as a tree of objects, 
    and it allows scripts to interact with and manipulate the content and 
    structure of a webpage dynamically.
example:
```
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>DOM Example</title>
            </head>
            <body>
                <h1 id="mainTitle">Hello, DOM!</h1>
                <p id="demo">This is a simple webpage.</p>
```
            ```html 
                <script>
                    // Accessing elements in the DOM
                    var titleElement = document.getElementById("mainTitle");
                    var demoElement = document.getElementById("demo");

                    // Modifying content
                    titleElement.textContent = "Welcome to the DOM!";
                    demoElement.innerHTML = "This content has been updated.";

                    // Creating a new element and appending it to the body
                    var newParagraph = document.createElement("p");
                    newParagraph.textContent = "This is a new paragraph.";
                    document.body.appendChild(newParagraph);
                </script>
            ```
            </body>
            </html>
____________________________________________________________________________________

1. What are the different data types present in JavaScript?
-> Data Type: a data type defines the type of value that a variable or expression 
    can hold.
                    JavaScript provides eight(8) different data types which are 
    undefined, null, boolean, string, symbol, bigint, number, and object.
___________________________________________________________________________________

2. Difference between `null` and `undefined`.

->  In JavaScript, null is an assignment value that represents no value or no object. 
    It is an intentional absence of any object value. On the other hand, `undefined` 
    is a type itself and represents a variable that has been declared but has not 
    yet been assigned a value.

Code Examples:

        var nullVar = null;
        console.log(nullVar); // Output: null

        var undefinedVar;
        console.log(undefinedVar); // Output: undefined

Intuition: We can think of null as an explicit "nothing" we can assign to a 
    variable, while undefined is what we get when a variable has been declared 
    without an assigned value.
___________________________________________________________________________________

3. Difference between Let, const & Var.

-> In JavaScript, let, const, and var are used to declare variables. var is 
    function-scoped and has been the traditional way of declaring variables. let and 
    const are block-scoped, and they were introduced in ECMAScript 2015 (ES6).

    let allows us to declare a variable that can be reassigned, while const is used 
    to declare a variable that cannot be reassigned.

Code Examples:

        var functionScopedVar = "I am function-scoped!";
        let blockScopedVar = "I am block-scoped!";
        const constantVar = "I am a constant!";

        if (true) {
        var functionScopedVar = "I am still function-scoped!";
        let blockScopedVar = "I am still block-scoped!";
        // const constantVar = "I cannot be reassigned!"; // Would throw an error
        }

        console.log(functionScopedVar); // Output: "I am still function-scoped!"
        console.log(blockScopedVar); // Output: "I am block-scoped!"
        console.log(constantVar); // Output: "I am a constant!"

Intuition: Think of var as a more flexible way of declaring variables that can be 
    accessed within the entire function scope. In contrast, let and const provide 
    better control over variable scope, reducing the chances of bugs caused by 
    unintentional modifications.
-  
    1. var is the traditional way of writing Javascript variable.
        But, let & const are the latest version of writing javascript variable, 
        introduced in ECMAScript 2015(ES6);

    2. var is a functional scoped, But let & const are block scoped.

    3. var can be redeclared and converted to var again.
        let can be declared without assigning any value to it, 
        we can declare value to it later on.

    4. let can be converted to const, but const cannot be converted. let can change it's 
        value. But const is constant, which is unchangable and cannot change it's value.

    5. We can initialize values to var & let later on, but in const we must initialize value
        immediately.

    6. let allows us to declare a variable that can be reassigned, while const is used 
        to declare a variable that cannot be reassigned.

___________________________________________________________________________________

4. Explain Hoisting in JavaScript.

-> Hoisting -> Hoisting is a phenomina in Javascrpt by which we can access variables 
    and functions, even before we initialize it or we have put some value in it.
    We can access the variables without any error.  

Eg: In case of single variable the output will be undefined. 
    In case of proper function declaration it will show us the result. 
    in case of only function name without the paranthesis `()`
    it will show us the whole function code.
    In case the function is an arrow function it will give us
    an error "x is not a function". 

                Hoisting is a mechanism in JavaScript where variable and function 
    declarations are moved to the top of their containing scope during the 
    compilation phase. However, only the declarations are hoisted, not the 
    initializations.

Code Example:

            console.log(hoistedVar); // Output: undefined
            var hoistedVar = "I am hoisted!";

            // Equivalent to:
            sayHello();
            function sayHello(){
                console.log("hello");
            }                           // Output: hello
___________________________________________________________________________________

5. Explain Implicit Type Coercion in javascript.

-> Implicit type coercion in JavaScript refers to the automatic conversion of one 
    data type to another without the explicit involvement of the programmer. This 
    behavior occurs during certain operations or comparisons involving different 
    data types. JavaScript attempts to make sense of the operation by converting 
    one or more values to a common type.

Here are some examples of implicit type coercion:

    String and Number Concatenation: 
        var result = "5" + 3; // Result is the string "53"

        In this example, the number `3` is implicitly coerced into a string and 
        concatenated with the string `"5"`.

    Number and Boolean Operations:
        var result = 5 - true; // Result is the number 4

        The boolean value `true` is implicitly coerced to the number `1` during the 
        subtraction operation.

    Comparison Operators:
        var result = "10" > 5; // Result is true

        The string `"10"` is implicitly coerced to the number `10` during the 
        greater-than comparison.

    Falsy and Truthy Values:
        var result = "Hello" || "World"; // Result is "Hello"

        The logical OR (`||`) operator returns the first truthy value. If the left 
        operand is truthy, it is returned; otherwise, the right operand is returned. 
        Here, the string `"Hello"` is truthy, so it is returned.

While implicit type coercion can be convenient, it's important for developers to be 
aware of its behavior to prevent unexpected results. Explicit type conversion using 
functions like `parseInt`, `parseFloat`, `Number()`, `String()`, etc., can be used 
when more control over the conversion process is needed.
___________________________________________________________________________________

6. Explain passed by value and passed by reference.

-> In programming, the terms "passed by value" and "passed by reference" refer to 
    how arguments are transferred to functions and methods. These concepts are 
    crucial in understanding how data is manipulated in a programming language.

    1. Passed by Value:
    -> Pass by value means when a variable is assigned to another variable, the value stored 
        in the variable is copied into the new variable. They are independent of each other, 
        each occupying its own memory space.

    * In a "passed by value" mechanism, the actual value of the variable is passed 
        to the function or method.
    * The function receives a copy of the variable's value, and any changes made to 
        the parameter inside the function do not affect the original variable outside 
        the function.
    * This is typical for primitive data types such as numbers, strings, and booleans.

Example (in JavaScript):
```js
                function increment(num) {
                num = num + 1;
                }

                let count = 5;
                increment(count);
                console.log(count); // Output: 5 (unchanged)
```
    2. Passed by Reference:
    -> When an object is created in JavaScript, it is stored in a memory space, 
        and the variable associated with it stores the memory address or reference 
        where the object is stored.

    * In a "passed by reference" mechanism, the memory address (reference) of the 
        variable is passed to the function or method.
    * Any changes made to the parameter inside the function affect the original 
        variable outside the function because they both point to the same memory 
        location.
    * This is typical for non-primitive data types such as objects and arrays.

Example (in JavaScript):
```js
                function addItem(arr, item) {
                    arr.push(item);
                }

                let myArray = [1, 2, 3];
                addItem(myArray, 4);
                console.log(myArray); // Output: [1, 2, 3, 4] (modified)
```
It's important to note that the terms "passed by value" and "passed by reference" 
are somewhat simplifications, and a more accurate way to describe JavaScript's 
behavior is "passed by value" for primitives and "passed by sharing" or "passed by 
object reference" for objects. In the case of objects, the reference is passed by 
value, meaning changes to the object's properties are visible outside the function, 
but reassigning the reference inside the function does not affect the 
original reference.

//  Difference
**Pass by Value**
1.  Pass by Value works only on Primitive Datatypes.
2.  In pass by value original copy of the data is copied.
3.  The function receives a copy of the variable's value,
    and any changes made to the parameter inside the function 
    do not affect the original variable outside the function.
4.  Example:- 
```js   let a = 5; 
        let b = a;
        console.log(a);
        console.log(b);
        // Output for both will be 5.
```
5.  After passing by value the original variable and the copied variable
    both works independently.

**Pass by Reference**
1.  Pass by Reference works only on Non-primitive Datatypes.
2.  In pass by reference the memory location is copied 
    or the reference value is copied
3.  Any changes made to the parameter inside the function affect 
    the original variable outside the function because they both 
    point to the same memory location.
4.  Example:-
```js   
        let obj1 = {
            name: "dhan",
            pass: "rabha"
        }
        let obj2 = obj1;
        obj2.pass = "dddd";
        console.log(obj1);
        console.log(obj2);
        // Output will change the 'pass' of original variable to "dddd";
```
5.  After passing by reference the value of the original variable and the
    copied variable is depedent on each other, which means if one changes,
    the other's value might also get changed.
___________________________________________________________________________________

7. What is immediately invoked function?

-> An Immediately Invoked Function Expression (IIFE) is a common JavaScript pattern 
    where a function is defined and executed immediately after its creation. This 
    pattern helps create a private scope for variables, preventing them from 
    polluting the global scope. The syntax involves wrapping the function in 
    parentheses and invoking it immediately.

    Imp:- Prevent Global scope pollution, by not letting the code assible outside 
    the IIFE.

    Here's the basic structure of an IIFE:
```js
                (function() {
                    // code inside this function is executed immediately
                })();
```
    You can also pass arguments to an IIFE:
```js
                (function(x, y) {
                    console.log(x + y);
                })(3, 5); // Outputs: 8
```
    Key features of IIFE:
    1. Encapsulation: Variables declared inside the IIFE are not accessible from 
        the outside, providing a way to create private variables.
    2. Avoiding Global Scope Pollution: Since the variables and functions inside 
        the IIFE are not added to the global scope, they don't interfere with 
        other scripts or libraries.
    3. Immediate Execution: The function is executed immediately after it's 
        defined, allowing us to perform tasks or initialize values right away.
___________________________________________________________________________________

8. Explain Higher Order Functions in javascript.

-> Higher-order functions in JavaScript are functions that operate on other 
    functions by taking them as arguments or returning them. In other words, a 
    higher-order function either takes one or more functions as arguments or 
    returns a new function.

    Here are the two main characteristics of higher-order functions:

    1. Takes a Function as an Argument:
        A higher-order function can accept another function as an argument.

                function higherOrderFunction(callback) {
                    // Do something
                    callback();
                }

                function myCallback() {
                    console.log("Callback executed!");
                }

                higherOrderFunction(myCallback);

    2. Returns a Function:
        A higher-order function can also return a new function.

                function higherOrderFunction() {
                    // Returns a new function
                    return function() {
                        console.log("Returned function executed!");
                    };
                }

                const returnedFunction = higherOrderFunction();
                returnedFunction();

    Common examples of higher-order functions in JavaScript include `map`, `filter`, 
    `reduce`, and `forEach` for array manipulation, as well as functions like 
    `setTimeout` and `addEventListener` for handling asynchronous operations. 

        Example:
                const numbers = [1, 2, 3, 4, 5];

                // Higher-order function: map
                const squaredNumbers = numbers.map(function(num) {
                    return num * num;
                });

                console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

Why we use it is because, to make a low level design code, so that the function is reusable,
small & understandable.
___________________________________________________________________________________

9. What is callback?

-> We can take a function and pass it into another function, and when we do so, this 
    function which we pass into another function is known as callback function.
                    As we know Javascript is a synchronous and single-threaded 
    language, but callback one of the ways through which we can do asynhcronous thing in javascript.

    A callback function is a function that is passed as an argument to another function
    and is executed after the completion of some operation. Callback functions are used 
    to handle asynchronous operations, maintain control flow and support functional 
    programming patterns. 

Example:

setTimeout(function () {    // This function that we first pass as a parameter to the setTimeOut 
    console.log("timer");   // is a callback function.
}, 4000);      

function x(y){ 
    console.log("x");
    y();
}
x(function y(){             //  Giving the responsibility of this function to another function.  
    console.log("y");
})

Output: x y timer(after 4sec)
___________________________________________________________________________________

10. What is closure?

-> A function along with a reference to it's outer environment, together forms a 
    closure. In other words, closure is a combination of a function and its lexical 
    scope bundled together forms a closure.

    Closure can be used to create reusable function that can access data which is not 
    in their own scope. 
___________________________________________________________________________________

11. What is promise? Write a code for promise.

-> A promise in JavaScript is an object that represents the eventual completion or 
    failure of an asynchronous operation and its resulting value. It is a way to handle 
    asynchronous operations more elegantly and avoid the callback hell, making code 
    more readable and maintainable.
    
    A Promise is in one of three states:
    1.  Pending: The initial state; neither fulfilled nor rejected.
    2.  Fulfilled: The operation completed successfully, and the Promise has a 
        resulting value.
    3.  Rejected: The operation failed, and the Promise has a reason for the failure.

A Promise is said to be "settled" if it is either fulfilled or rejected.

Code Example:

            const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise resolved");
            }, 1000);
            });

            myPromise.then((message) => {
            console.log(message);
            }).catch((error) => {
            console.log(error);
            });

Code Example:-
            function fetchData(){
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        const success = true;
                        if(success){
                            resolve("Data successfully fetched!");
                        } else{
                            reject("Error, Unable to fetch data");
                        }
                    }, 2000);
                });
            }

            fetchData()
                .then((result)=>{
                    console.log(result);
                })
                .catch((error)=>{
                    console.error(error);
                });

Intuition: Think of a Promise as a contract between two parties. One party promises 
to deliver a result in the future (resolve) or provide a reason why they 
couldn't (reject). The other party can then decide what to do based on whether the 
promise was fulfilled or rejected.

There are four major promise APIs
    1. promise.all()
    2. promise.allSettled()
    3. promise.race()
    4. promise.any()

1. promise.all() -> Suppose we need to make parallel API calls, Eg: there are 10
    user Ids, & we have an api call for user info, we want to make 10 parallel api 
    calls for 10 users. Here we shall use parallel apis.
                It is used to handle multiple api calls together. It takes an 
    array(iterables) of promises as an input.
    But if any one of these api's is not successfull, it will give us an error for
    all the api's. It will not wait for other promises to get successful or rejected.

2. promise.allSettled() -> The problem of promise.all() is settled through
    promise.allSettled(). when we need the result of only the successful promises, we
    use promise.allSettled(). Here even if any one of the promise fails in between
    it will still wait for all promises to settled.

3. promise.race() -> As the name suggest its a race, so as soon as the first promise 
    resolves, it will give the result of that promise. So whether the result maybe 
    success or failure. It will give us the outcome of the first promise. It will not
    wait for other promises to finish. 

4. promise.any() -> Whenever the first promise will resolve, or it will wait for
    the first promise to get success, it will show us the result of the first successful 
    promise. Even if any promise is failed in the beginning, it doesn't matter. It
    will show us the promise of that result.
                But if all the api/promise fails, the return will be an aggregated
    error. It will be an error of all the errors, in a array.

___________________________________________________________________________________

12. What are non-primitive data type?

-> Non-primitive data types, also known as reference types, are data types in 
    programming languages that are not directly represented as a single, simple value. 

    Example:
    objects, array, functions, etc...
___________________________________________________________________________________

13. What is `addEventListner`?

->  `addEventListener` is a method in JavaScript that allows us to attach an event 
    handler function to an HTML element. An event handler is a function that gets 
    executed in response to a specific event occurring on an HTML element, such as a 
    click, mouseover, keypress, etc.

    Example:
    element.addEventListener(event, function, options);
___________________________________________________________________________________

14. What is event bubbling?

-> In event bubbling, the event starts at the target element and then moves up the DOM 
    tree, notifying each ancestor element of the event. This is the default behaviour 
    in Javascript.
                In event bubbling, the child tells its parents, who tells their parents
    (i,e. grandparents) and so on.

    Example:
    html:
            <div id="outer">
                <div id="middle">
                   <button id="inner">Click me</button>
                </div>
            </div>

    Example of handling an event during the bubbling phase:
    JavaScript:
            document.getElementById('outer').addEventListener('click', function() {
                console.log('Outer div clicked');
            });

            document.getElementById('middle').addEventListener('click', function() {
                console.log('Middle div clicked');
            });

            document.getElementById('inner').addEventListener('click', function() {
                console.log('Button clicked');
            });
___________________________________________________________________________________

15. What is event delegation, and why is it useful in JavaScript? Provide an example.

-> Event delegation is a JavaScript programming pattern where we use a single event 
    listener to manage all the events for a particular type on a parent element, 
    rather than setting up individual event listeners on each child element. This is 
    achieved by taking advantage of event bubbling, where events on nested elements 
    propagate up to their ancestors.

    imp:- to create cleaner code and fewer event listeners with better logic.

Event delegation is useful for the following reasons:
    1. Efficiency: It reduces the number of event listeners in our code, which can 
        improve performance, especially when dealing with a large number of elements.

    2. Dynamic Content: It works well with dynamically added or removed elements, 
        as the event listener is attached to a parent that exists when the page loads.

    3. Simpler Code: It often leads to cleaner and more maintainable code since we 
        don't need to manage individual event listeners for each child element.

    Example:
            <ul id="itemList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <script>
                // Event delegation
                document.getElementById('itemList').addEventListener('click', function(event) {
                    if (event.target.tagName === 'LI') {
                        // The clicked element is an <li> element
                        console.log('Clicked on:', event.target.textContent);
                    }
                });
            </script>
___________________________________________________________________________________