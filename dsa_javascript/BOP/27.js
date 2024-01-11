//  27. Count and print the number of words in a given sentence.

const str = " Hello, Good Morning!";

// const word = str.trim().split(' ');
// console.log(word.length);


const myWords = str.trim().split(new RegExp("\\s+"));
console.log(myWords.length);
