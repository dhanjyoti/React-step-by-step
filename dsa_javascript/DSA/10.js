//  10. you have a string you need to give the count aside the string as output using Run-length algorithm.
//  example: 
//  Input - aaabbddddfee
//  output - 3a2b4d1f2e

function runLengthEncoding(inputString) {
    let encodedString = "";
    let count = 1;

    // Add the first character
    encodedString += inputString[0];

    // Iterate through the input string starting from the second character
    for (let i = 1; i < inputString.length; i++) {
        console.log(i)
        // If the current character is the same as the previous one, increment count
        if (inputString[i] === inputString[i - 1]) {
            count++;
        } else {
            // If the current character is different, append count and character to the encoded string
            encodedString += count + inputString[i - 1];
            count = 1;
        }
    }

    // Append the last character count
    encodedString += count;
    return encodedString;
}

// Test the function
const inputStr = "aaabbddddfee";
const encodedOutput = runLengthEncoding(inputStr);
console.log("Input:", inputStr);
console.log("Output:", encodedOutput);
