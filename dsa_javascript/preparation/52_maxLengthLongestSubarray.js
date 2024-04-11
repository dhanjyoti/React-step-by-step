//  Maximum length of subarrays of size k.

let arr = [4, 1, 1, 1, 2, 3, 5];
let k = 5;

// function lengthOfLongestSubarray(arr, k){
//     let n = arr.length;
//     let maxLength = 0;  // variable to store sum of subarrays
//     for(let i=0; i<n; i++){
//         let sum = 0;
//         for(let j=i; j<n; j++){
//             sum += arr[j];  // storing sum of subarrays
//             if(sum == k){   
//                 //  update maxLength
//                 maxLength = Math.max(maxLength, j-i+1);
//             }
//         }
//     }
//     return maxLength;
// }
// console.log(lengthOfLongestSubarray(arr, k));

``
function solve(array,k) {
   let j  = 0; 
   let i = 0;
   let max = 0
   let sum = 0
 while (j < array.length) {
  sum += array[j]
  if(sum < k){
   j++
  }else{
   max = Math.max(max, j - i + 1)
   sum = sum - array[i]
   j++
   i++
  }
 }
  return max  
}
console.log(solve(array,k))