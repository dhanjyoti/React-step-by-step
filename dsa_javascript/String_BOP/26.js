//  26. Count the number of words in a sentence.

const str = " Hello, Good Morning!";

// Use a regular expression to match words
const wordCount = str.trim().split(/\s+/).length;

console.log(wordCount);