//  24. Sort words in a string in alphabetical order.

let inputString = "banana apple orange";

// Split the string into an array of words
let wordArray = inputString.split(' ');

// Implement bubble sort for sorting the array of words
for (let i = 0; i < wordArray.length - 1; i++) {
  for (let j = 0; j < wordArray.length - 1 - i; j++) {
    if (wordArray[j] > wordArray[j + 1]) {
      // Swap words if they are in the wrong order
      let temp = wordArray[j];
      wordArray[j] = wordArray[j + 1];
      wordArray[j + 1] = temp;
    }
  }
}

// Join the sorted words back into a string
let sortedString = wordArray.join(' ');

console.log(`Original String: ${inputString}`);
console.log(`Sorted String: ${sortedString}`);
