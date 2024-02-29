//  Given an integer array nums and an integer k, return the
//  kth largest element.
//  Condition: You are not allowed to use any predefined functions
//  Example 1:
//  Input: nums = [3, 2, 1, 5, 6, 4], k =2
//  Output: 5

let arr = [3, 2, 1, 5, 6, 4];

function sortedArray(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let sorted = sortedArray(arr);
console.log(sorted)

// let nonRepeatedArray = [];
// for(let i=0; i<sorted.length; i++){
//     if(sorted[i] !== sorted[i+1]){
//         nonRepeatedArray.push(sorted[i]);
//     }
// }
// console.log(nonRepeatedArray)

let kth = 2;
let result = sorted[sorted.length - kth];
console.log(result)