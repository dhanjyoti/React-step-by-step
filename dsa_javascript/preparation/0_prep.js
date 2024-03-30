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

// Coins denomination

// Factorial
// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

//  Create an array with a range of numbers. input start: 1, end: 5
// function rangeOfNumbers(start, end){
//     if(end < start){
//         return [];
//     }
//     const num = rangeOfNumbers(start, end-1);
//     num.push(end);
//     return num;
// }
// console.log(rangeOfNumbers(1, 5));

// Find if a number is Palindrome
// function isPalindrome(s){
//     if(s.length==0 || s.length==1){
//         return true;
//     }
//     else{
//         if(s.charAt(0)===s.charAt(s.length-1)){
//             return isPalindrome(s.slice(1,s.length-1))
//         }
//         else{
//             return false
//         }
//     }
// }
// console.log(isPalindrome("221"))

// print odd numbers from 1 to 100 using recursion
// function printOddNumbers(start, end){
//     if(start > end){
//         return
//     }
//     if(start%2 !== 0){
//         console.log(start);
//     }
//     printOddNumbers(start+1, end);
// }
// console.log(printOddNumbers(1, 100))

// Sum of array using recursion
// let arr = [3, 8, 6, 4, 1];
// function addition(arr, n){
//     if(n <= 0){
//         return 0;
//     }
//     return (addition(arr, n-1) + arr[n-1]);
// }
// console.log(addition(arr, arr.length))

// const obj1 = {
//     name: "Rahul"
// }
// const obj2 = {
//     name: "Rahul"
// }

// console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

// let employeeList = [
//   {
//     first_name: "Eleanor",
//     last_name: "Bolton",
//     designation: "CEO, Co-Founder",
//     age: 45,
//   },
//   {
//     first_name: "Caspian",
//     last_name: "Shields",
//     designation: "CTO, Co-Founder",
//     age: 34,
//   },
//   {
//     first_name: "Marek",
//     last_name: "Goodman",
//     designation: "CFO",
//     age: 31,
//   },
//   {
//       last_name: "Goodman",
//       designation: "CFO",
//       age: 31,
//       first_name: "Marek",
//   },
//   {
//     first_name: "Buster",
//     last_name: "Mackenzi",
//     designation: "COO",
//     age: 43,
//   },
//   {
//     first_name: "Caspian",
//     last_name: "Shields",
//     designation: "CTO, Co-Founder",
//     age: 34,
//   },
// ];

// // Using Map
// let uniqueList = [...new Map(employeeList.map(item => [item.designation, item])).values()]
// console.log(uniqueList)

// Object.entries, Object.keys, Object.values => Read

// Using JSON.stringify
// const array = employeeList.filter(function(item, index){
//     return index === employeeList.findIndex(function(obj){
//         return JSON.stringify(item) === JSON.stringify(obj);
//     });
// })
// console.log(array)

// function removeDuplicate(arr){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(JSON.stringify(arr[i]) === JSON.stringify(arr[j])){
//                 result.push(i);
//             }
//         }
//     }
//     for(let i=0; i<result.length; i++){
//         arr.splice(result[i], 1);
//     }
//     console.log(arr)
// }
// removeDuplicate(employeeList);

// function removeDuplicateObj(arr) {
// const uniqueArray = Array.from(new Set(arr.map(a => JSON.stringify(a))));
// return uniqueArray.map(str => JSON.parse(str));
// }
// console.log(removeDuplicateObj(employeeList));

// function removeDuplicateObj(arr) {
//     const uniqueArray = [...new Set(arr.map(a => JSON.stringify(a)))];
//     return uniqueArray.map(str => JSON.parse(str));
// }
// console.log(removeDuplicateObj(employeeList));

// function removeDuplicates(arr) {
//     const uniqueObjects = new Set(arr.map(obj => JSON.stringify(obj)));
//     return Array.from(uniqueObjects).map(str => JSON.parse(str));
//   }
//   // Call the function to remove duplicates
//   const uniqueEmployeeList = removeDuplicates(employeeList);

//   console.log(uniqueEmployeeList);




// console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
// function objectsHaveSameKeys(...objects) {
//     const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
//     const union = new Set(allKeys);
//     return objects.every(object => union.size === Object.keys(object).length);
//  }
//  console.log(objectsHaveSameKeys(obj1, obj2));


