**Javascript** 
Javascript is a cross-platform, object oriented scripting language used to make webpages interactive( eg., having complex animations, clickable buttons,  pop-up menus, etc ).

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
for-of loop is suitable when we need more control over the loop, such using break statement ot continue statement inside.  

forEach method iterates over each element of the array and perform some action on each element.

# What are functions in JS? What are the types of function.
A function is a reusable block of code that performs a specific task.
Eg: Named funciton, Anonymous function, function expression, Arrow function, IIFE, Callback function and Higher-Order-Function.

# What is the difference between Named and Anonymous function? When to use what?
Named functions have a named identifier. Use it in big and complex applications. Use it when we want to reuse one function at multiple places.
Anonymous functions do not have name identifiers and cannot be referenced directly by name. Use it for small logics. Use it when we want to use a function only a simgle time.

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






