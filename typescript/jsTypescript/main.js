"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "dhanjyoti";
var sentence = "My name is ".concat(name, ", I am a beginner is Typescript");
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
var list1 = [1, 2, 3, 4];
var list2 = [4, 3, 2, 1];
// tuple
var person1 = ["dhan", 30];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// console.log(c)
// any
var randomValue = 10;
randomValue = true;
randomValue = 'Dhan';
var myVariable = 10;
function hasname(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasname(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var multiType;
multiType = 20;
multiType = true;
// let anyType: any;
// anyType = 20;
// anyType = true;      no type support
// Optional parameter must be always after the required parameter.
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// console.log(add(5, 100));
// default parameter
function sum(a1, a2) {
    if (a2 === void 0) { a2 = 10; }
    return a1 + a2;
}
// function fullname(person: {firstname: string, lastname: string}){
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "dhanjyoti",
    lastname: "rabha"
};
fullname(p);
// this public is optional and we can change it to private, but if we make it 
// private it won't be accessable to other functions
// we can also change it to protected this will be accessable only to the derived 
// function but not outside
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeename = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeename));
    };
    return Employee;
}());
var emp1 = new Employee("dhanR");
console.log(emp1.employeename);
emp1.greet();
// Inheritance: we use extends keyword
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managername) {
        return _super.call(this, managername) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("djrabha");
m1.delegateWork();
m1.greet();
console.log(m1.employeename);
