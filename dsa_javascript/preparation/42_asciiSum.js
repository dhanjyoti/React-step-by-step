// Minimum ASCII Delete Sum for Two Strings


// Topics
// Companies
// Hint
// Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

// Example 1:

// Input: s1 = "sea", s2 = "eat"
// Output: 231
// Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
// Deleting "t" from "eat" adds 116 to the sum.
// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
// Example 2:

// Input: s1 = "delete", s2 = "leet"
// Output: 403
// Explanation: Deleting "dee" from "delete" to turn the string into "let",
// adds 100[d] + 101[e] + 101[e] to the sum.
// Deleting "e" from "leet" adds 101[e] to the sum.
// At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
// If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
 
// let s1 = 'sea';
// let s2 = 'eat';

// // join the strings
// let concat = [...s1, ...s2];
// console.log(concat);

// // find unique strings
// let frequency = {};
// concat.forEach(i =>{
//     frequency[i] = (frequency[i] || 0) + 1;
// })
// let nonRepeated = concat.filter(i=>frequency[i] === 1);
// console.log(nonRepeated)

// // find ASCII values
// let asciiValue = nonRepeated.map((char)=> char.charCodeAt(0));
// console.log(asciiValue)

// // sum of the array
// let sum = 0;
// for(let i=0; i<asciiValue.length; i++){
//     sum += asciiValue[i];
// }
// console.log(sum)

let s1 = 'delete';
let s2 = 'leet';

let minimumDeleteSum = function(s1, s2){
    let prevRow = new Array(s2.length + 1).fill(0);
    for(let j=1; j<=s2.length; j++){
        prevRow[j] = prevRow[j-1] + s2.charCodeAt(j-1);
    }
    for(let i=1; i<s2.length; i++){
        let currRow = [prevRow[0] + s1.charCodeAt(i-1)];
        for(let j=1; j<s2.length; j++){
            if(s1[i-1] === s2[j-1]){
                currRow.push(prevRow[j-1]);
            } else {
                currRow.push(Math.min(prevRow[j] + s1.charCodeAt(i-1), currRow[currRow.length-1] + s2.charCodeAt(j-1)))
            }
        }
        prevRow = currRow;
    }
    return prevRow[prevRow.length - 1];
}

console.log(minimumDeleteSum(s1, s2))