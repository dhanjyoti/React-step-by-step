//  12. Replace a specific character in a string.

// let string = "how are you?"
// let newString = string.replace("are", "were");
// console.log(newString);

let a = "good";
let indexToReplace = 0;
let replaceChar = 'w';
let arr = a.split('');

arr[indexToReplace] = replaceChar;

let newWord = arr.join('');
console.log(newWord);