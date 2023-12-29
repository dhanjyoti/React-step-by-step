//  25. Reverse the order of words in a sentence.

// let inputSentence = "Hello world, how are you?";

// // Split the sentence into an array of words
// let wordArray = inputSentence.split(' ');

// // Reverse the array of words
// let reversedArray = wordArray.reverse();

// // Join the reversed words back into a sentence
// let reversedSentence = reversedArray.join(' ');

// console.log(`Original Sentence: ${inputSentence}`);
// console.log(`Reversed Sentence: ${reversedSentence}`);


// Without using library
let inputSentence = "Hello world, how are you?";

// Function to reverse the order of words in a sentence
function reverseSentence(sentence) {
  let reversedSentence = '';
  let currentWord = '';

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      currentWord += sentence[i];
    } else {
      reversedSentence = currentWord + ' ' + reversedSentence;
      currentWord = '';
    }
  }

  // Handle the last word
  reversedSentence = currentWord + ' ' + reversedSentence;

  return reversedSentence.trim();
}

// Call the function to reverse the sentence
let reversedSentence = reverseSentence(inputSentence);

console.log(`Original Sentence: ${inputSentence}`);
console.log(`Reversed Sentence: ${reversedSentence}`);
