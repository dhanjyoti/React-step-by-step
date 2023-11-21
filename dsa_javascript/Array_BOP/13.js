//  13. Find the index of the last occurrence of a given element.

let array = [2, 4, 6, 7, 4, 6, 3];

function lastIndexOccurance(arr, target){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}
let lastIndex = 4;

let index = lastIndexOccurance(array, lastIndex);
if (index !== -1) {
    console.log(`Index of the last occurrence of ${lastIndex}: ${index}`);
  } else {
    console.log(`Element ${lastIndex} not found in the array`);
  }
