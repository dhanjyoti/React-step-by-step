// Print ASCII values of a string inside an array

let string = 'Rahul';
let asciiValue = [];
for(let i=0; i<string.length; i++){
    let newString = string.charCodeAt(i);
    asciiValue.push(newString);
}
console.log(asciiValue);