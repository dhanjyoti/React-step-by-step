// task file=./practice.js

// let n = 5;
// let target = 1;
// for(let i=0; i<n; i++){
//     console.log("first")
// }
// let arr = [2, 5, 7, 9]  //not constant
// let a = 0;
// let b = arr.length-1;
// for(let j=0; j<n/2; j++){
//     if((a + b)/2){

//     }
//     console.log("second")
// }

// let arr = [];
// for(let i=0; i<5; i++){
//     arr.push(i);
// }
// console.time('time');
// console.log(arr)    // space complixity 'n'
// console.timeEnd('time');

// & | ^ ~ >> <<

// 101 => 5 >> 010 >> 001

// 8 4 2 1

// How many falsey values we have in javascript?
// what is the use of `&` and, not, `!` ans  or `|` operator?
// Types of sorting.(bubble sort)

// merge sort
// insertion sort

//  ** Merge sort(Conquer Two sorted array with Two pointer approach)
// let array = [3, 1, 2, 4];
// function merge(arr1, arr2) {
//   let combine = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       combine.push(arr1[i]);
//       i++;
//     } else {
//       combine.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     combine.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     combine.push(arr2[j]);
//     j++;
//   }
//   return combine;
// }
// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }
// const sort = mergeSort(array);
// console.log(sort);

// let num = 12;
// function countPrimes(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(true);
//   }
//   arr[0] = false;
//   arr[1] = false;
//   for (let i = 2; i * i <= n; i++) {
//     for (let j = 2 * i; j <= n; j += i) {
//       arr[j] = false;
//     }
//   }
//   let count = 0;
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k]) {
//       count++;
//     }
//   }
//   return count;
// }
// const result = countPrimes(num);
// console.log(result);

// I am the key and I am the value
// key-> id value-> 1
// key= dny1 calue = test

// for(let key of arr){
//   for(let data in key){
//     console.log(`I am the ${data} and I am the ${key[data]}`);
//   }
// }

// arr.forEach(obj => {
//   Object.keys(obj).forEach(key => {
//     const value = obj[key];
//     console.log(`I am the key ${key} and I am the value ${value}`);
//   });
// });

// DOM api

// Stack

// what is useState?
// It is like a container. it can have all kinds of data.

// what is props?
// It is an intermediator.

// what are components?
// Difference between functional components & class components

// what is Lifecycle method.
// what is hooks in funcitonal components.
// what is the use of useEffect.
// what is controlled and uncontrolled component.
// what is state lifting up?
// difference between useMemo, useCallback and useEffect.
// what is Memo?
// what is Lazy loading?
// How to send data child component to parent conponent.
// what is useRef?
// what is list in keys?
// what is the use of package.json
// what is npm
// what is strictMode?
// what is error boundaries?
// what are browser-router?

// Output: [3,6], [3,5,1], [3,4,2],[8,1], [7,2], [6,1,2], [5, 4],[9];
// let output = [];
// for(let i=0; i<arr.length; i++){
//   let result = [];
//   let start = arr[i];
//   for(let j=i+1; j<arr.length; j++){
//     if((start + arr[j]) == sum){
//       result.push(start);
//       result.push(arr[j]);
//     } else if(start+arr[j] < sum){
//       start += arr[j];
//       result.push(arr[j])
//     }else {
//       continue;
//     }
//   }
//   output.push(result);
//   result = [];
// }
// console.log(output)

// let arr = [3, 8, 7, 6, 5, 4, 1, 9, 2];
// let sum = 9;
// // Output: [3,6], [3,5,1], [3,4,2],[8,1], [7,2], [6,1,2], [5, 4],[9];
// function findPairs(arr, target){
//   let result = [];
//   let output = [];
//   for(let i=0; i<arr.length-1; i++){
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i]+arr[j] == target){
//         result.push([arr[i], arr[j]]);
//       } else if(arr[i]==target){
//         result.push([arr[i]])
//       } else if(arr[i]+arr[j]<target){

//       }
//     }
//   }
//   return result;
// }
// console.log(findPairs(arr, sum));
// let arr = [4, 6, 2, 8, 6, 6, 3, 9, 2];
// let arr2 = [6, 7, 9, 3];









// let arr = [1, 2, 3, 4, 5];
// let rotate = 3;

// function rotateArray(arr, rotate){
//   for(let i=0; i<rotate; i++){
//     arr.unshift(arr.pop())
//   }
//   return arr;
// }
// console.log(rotateArray(arr, rotate))


// function Rotation(arr) {
//   let n = arr.length;
//   let x = arr[n - 1];
//   for (let i = n - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = x;
//   return arr;
// }
// const result = Rotation(arr);
// console.log(result);


//  Find the maximum sum of the contigious sub array

// let arr = [-1, 3, 4, -5, 6, 8, 10, -11];

// let subArrays = [];
// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     for(let j=i+1; j<arr.length-1; j++){
//         count += arr[j]
//     }
//     subArrays.push(count);
// }
// console.log(subArrays)
// let sortArray = subArrays.sort((a, b)=> a-b);
// let max = sortArray[sortArray.length - 1];
// console.log(max);

// function maxSubArraySum(arr){
//     let sum = arr[0];
//     let currentSum = arr[0];
//     for(let i=1; i<arr.length; i++){
//         sum = Math.max(arr[i], sum + arr[i]);
//         currentSum = Math.max(sum, currentSum);
//     }
//     return currentSum;
// }
// console.log(maxSubArraySum(arr));

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