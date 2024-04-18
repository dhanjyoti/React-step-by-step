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
    Polymorphism means having different and 'many forms'. A subclass can define its own unique behaviourand still share the same functionalities or behaviour of its parent/base class.

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

# Prototype in Javascript
In JavaScript, a prototype is an object from which other objects inherit properties. Each JavaScript object has a prototype, which could be another object or null. Prototypes are a fundamental concept in JavaScript's inheritance model, allowing objects to inherit properties and methods from other objects.

All Javascript objects inherit properties and methods from a prototype.
```js
        // Creating a constructor function
        function Person(name, age) {
        this.name = name;
        this.age = age;
        }

        // Adding a method to the Person prototype
        Person.prototype.sayHello = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        };

        // Creating an instance of Person
        var john = new Person("John", 30);

        // Calling the method from the prototype
        john.sayHello(); // Output: Hello, my name is John and I am 30 years old.
```
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

In JavaScript, whenever a function is created the prototype property is added to that function automatically. This property is a prototype object that holds a constructor property.

**What is the requirement of a prototype object?**
Whenever an object is created in JavaScript, its corresponding functions are loaded into memory. So, a new copy of the function is created on each object creation.

In a prototype-based approach, all the objects share the same function. This ignores the requirement of creating a new copy of function for each object. Thus, the functions are loaded once into the memory.

**What are these extra properties, and where do they come from?**
Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

***Prototype Chaining***
In JavaScript, each object contains a prototype object that acquires properties and methods from it. Again an object's prototype object may contain a prototype object that also acquires properties and methods, and so on. It can be seen as prototype chaining.
```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```
This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

# What is Prototype Inheritance in JavaScript?
Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.

Prototypes are hidden objects that are used to share the properties and methods of a parent class with child classes.

**Syntax**
The syntax used for prototype inheritance has the proto property which is used to access the prototype of the child.
Eg: `child.__proto__ = parent;`
```js
        // Creating a parent object as a prototype
        const parent = {
        greet: function() {
            console.log(`Hello from the parent`);
        }
        };

        // Creating a child object
        const child = {
        name: 'Child Object'
        };

        // Performing prototype inheritance
        child.__proto__ = parent;

        // Accessing the method from the parent prototype
        child.greet(); // Outputs: Hello from the parent 
```