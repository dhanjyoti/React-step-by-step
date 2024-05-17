//  1. Print the characters of a string one by one.

let myString = "Hello Dhanjyoti";

// let result = '';
// for(let i=0; i<myString.length; i++){
//     result += myString[i] + " ";
// }
// console.log(result)

let result = '';
for(let char of myString){
    result += char + ' ';
}
console.log(result)