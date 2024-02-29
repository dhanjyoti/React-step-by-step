// •⁠  ⁠Write a code to print each element of array only once even they are repeating more than 
//      once in O(n) time complexity
// Input - 2,9,7,9,7,9
// Output- 2,9,7

let arr = [2, 9, 7, 9, 7, 9];
let sortedArray = arr.sort((a, b) => a - b); // Sort numerically

let nonRepeatedArray = [];
for(let i=0; i<sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i+1]){
        nonRepeatedArray.push(sortedArray[i]);
    }
}
console.log(nonRepeatedArray)


