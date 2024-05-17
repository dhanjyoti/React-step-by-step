//  2. Find the length of a string without using the built-in length() method.

function calculateStringLength(str){
    let count = 0;

    while(str[count] !== undefined){
        count++;
    }
    return count;
}
const myString = "Hello, Dhanjyoti";
const lengthWithoutLengthMethod = calculateStringLength(myString);

console.log(`Length: ${lengthWithoutLengthMethod}`)