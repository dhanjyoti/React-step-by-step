// Given a number N, the task is to convert every digit of the number into words.

// https://www.geeksforgeeks.org/program-to-print-the-given-digit-in-words/

let wordArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let arrayLength = wordArray.length;
let inputNumber = '3456';
let numberArray = inputNumber.split('');
let numberLength = numberArray.length;

let result = '';
for(let i=0; i<numberLength; i++){
    result += wordArray[numberArray[i]] + " ";
}
console.log(result);