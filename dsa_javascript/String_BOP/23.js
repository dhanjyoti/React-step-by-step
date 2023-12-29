//  23. Sort characters in a string in alphabetical order.

// let inputString = "banana";

// // Split the string into an array of characters
// let charArray = inputString.split('');

// // Sort the array of characters in alphabetical order
// charArray.sort();

// // Join the sorted characters back into a string
// let sortedString = charArray.join('');

// console.log(`Original String: ${inputString}`);
// console.log(`Sorted String: ${sortedString}`);


// Without using library in bubble sort
let inputString = "banana";

// Convert the string to an array of characters
let charArray = inputString.split('');

// Implement bubble sort for sorting the array of characters
for (let i = 0; i < charArray.length - 1; i++) {
  for (let j = 0; j < charArray.length - 1 - i; j++) {
    if (charArray[j] > charArray[j + 1]) {
      // Swap characters if they are in the wrong order
      let temp = charArray[j];
      charArray[j] = charArray[j + 1];
      charArray[j + 1] = temp;
    }
  }
}

// Join the sorted characters back into a string
let sortedString = charArray.join('');

console.log(`Original String: ${inputString}`);
console.log(`Sorted String: ${sortedString}`);
