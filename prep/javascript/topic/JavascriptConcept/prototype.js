// let animal = {
//     eats: true,
//     walk(){
//         console.log("Animal walk");
//     }
// }

// let dog = {
//     eats:true,
//     bark(){
//         console.log("Dog barks");
//     }
// }

// dog.__protp__ = animal;

// console.log(dog.eats);
// animal.walk();
// dog.bark();


// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// }
// let person1 = new Person("John", 30);
// let person2 = new Person("Jane", 25);

// person1.greet();
// person2.greet();


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} barks`)
//     }
// }
// let dog = new Dog("Buddy");
// dog.speak();


// let arr = ["dhan", "dj"];
// let obj = {
//     name:"dhanjyoti",
//     city:"pune",
//     getIntro:function(){
//         console.log(this.name + " from " + this.city);
//     }
// }
// let obj2 = {
//     name:"raj"
// }

// obj2.__proto__ = obj;

// console.log(obj2.getIntro())


//	const o = {
//    a: 1,
//    b: 2,

//    __proto__: {
//        b: 3,
//        c: 4
//    }
//  }
//  console.log(o.a);
//  console.log(o.b);
//  console.log(o.c);
//  console.log(o.d);

// function Person(first, last, age, eyecolor){
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eyecolor;
// }
// const myFather = new Person("Jhon", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 47, "green");

const Obj1 = {
    name: "Dj",
    city: "Pune",
    getIntro: function(){
        return `${this.name} from ${this.city}`;
    }
}

const Obj2 = {
    name: "Dhan"
}

Obj2.__proto__ = Obj1;

console.log(Obj2.name);
console.log(Obj2.__proto__);
console.log(Obj2.city);
console.log(Obj2.getIntro());