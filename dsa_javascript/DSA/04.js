// Area of a Triangle
// If we know about all the 3 sides-> s = (a+b+c)/2 -> area = ,/(s(s-a)*(s-b)*(s-c))

let a = 5;
let b = 6;
let c = 3;
// let semiPeremeter = s;
let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);