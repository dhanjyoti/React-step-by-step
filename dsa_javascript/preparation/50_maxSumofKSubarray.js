/*
Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

let arr = [2, 1, 5, 1, 3, 2];

// function maxKsubarray(k, arr){
//     let maxSum = 0;
//     let currentSum = 0;
//     for(let i=0; i<arr.length-k+1; i++){
//         currentSum = 0;
//         for(let j=i; j<i+k; j++){
//             currentSum += arr[j];
//         }
//         maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// }
// console.log(maxKsubarray(3, arr))


let k = 3
function solve(array,k) {
    debugger
    let sum = 0;
    let max = 0;
    let i = 0;
    let j = 0;
    while (j < array.length) {
        sum += array[j];
        if(j - i + 1<k){
            j++;
        }else {
            max = Math.max(sum,max);
            sum = sum - array[i];
            i++;
            j++;
        }
    }
    return max;
}
console.log(solve(arr,k));