//  2. Find the length of a string without using the built-in length() method.

function calculateStringLength(str) {
    let count = 0;
    
    // Iterate through each character of the string until the end
    while (str[count] !== undefined) {
        count++;
    }
    
    return count;
  }
  
  // Example usage:
  const myString = "Hello, World!";
  const lengthWithoutLengthMethod = calculateStringLength(myString);
  
  console.log(`Length without using length method: ${lengthWithoutLengthMethod}`);
  

