export {}
let message = "Welcome back";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "dhanjyoti";
let sentence: string = `My name is ${name}, I am a beginner is Typescript`

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [4, 3, 2, 1];

// tuple
let person1: [string, number] = ["dhan",  30];

// enum
enum Color {Red = 4, Green, Blue};
let c: Color = Color.Green;
// console.log(c)

// any
let randomValue: any = 10;
randomValue = true;
randomValue = 'Dhan';

let myVariable: unknown= 10;
function hasname(obj: any): obj is {name: string}{
    return !!obj && typeof obj === "object" && "name" in obj 
}
if(hasname(myVariable)){
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();

let multiType: number | boolean;
multiType = 20;
multiType = true;

// let anyType: any;
// anyType = 20;
// anyType = true;      no type support

// Optional parameter must be always after the required parameter.
function add(num1: number, num2?: number): number {
    if(num2)
        return num1 + num2
    else
        return num1
}
// console.log(add(5, 100));

// default parameter
function sum(a1: number, a2: number = 10): number{
    return a1 + a2;
}
// console.log(sum(5))

interface Person{
    firstname: string;
    lastname?: string;
}
// function fullname(person: {firstname: string, lastname: string}){
function fullname(person:  Person){
    console.log(`${person.firstname} ${person.lastname}`);
}
let p = {
    firstname: "dhanjyoti",
    lastname: "rabha"
}
fullname(p)

// this public is optional and we can change it to private, but if we make it 
// private it won't be accessable to other functions
// we can also change it to protected this will be accessable only to the derived 
// function but not outside
class Employee {
    public employeename: string;

    constructor(name: string){
        this.employeename = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeename}`)
    }
}

let emp1 = new Employee("dhanR");
console.log(emp1.employeename);
emp1.greet()

// Inheritance: we use extends keyword
class Manager extends Employee{
    constructor(managername: string){
        super(managername);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}
let m1 = new Manager("djrabha");
m1.delegateWork();
m1.greet();
console.log(m1.employeename)