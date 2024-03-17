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
`==` ->  Loose Equality(==) operator compares two values for equality after performing type corecion. 
`===` -> Strict Equality(===) operator compares two values for equality without performing type coercion.  

# What is the difference betweenSpread and Rest operator in JS?
-> The `spread operator`(...) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements.
Uses - Copying an array, merging array, passing multiple arguments to a function.

-> The `rest operator` is used in function parameters to collect all remaining arguments into an array.

