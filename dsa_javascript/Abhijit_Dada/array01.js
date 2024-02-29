// 1. Sum of Elements:
// Given an array of integers, find the sum of all elements.

// let arr = [3, 5, 7, 9];
// let count = 0;
// for(let i=0; i<arr.length; i++){
//     count += arr[i];
// }
// console.log(count)


// 2. Maximum Element:
// Find the maximum element in an array.

// let arr = [3, 5, 78, 4, 34, 23];
// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max)


// 3. Minimum Element:
// Find the minimum element in an array.

// let arr = [65, 45, 45, 33, 23, 75, 42];
// let min = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i];
//     }
// }
// console.log(min);


// 4. Array Rotation:
// Rotate an array to the right by a given number of steps.

// let arr = [65, 45, 45, 33, 23, 75, 42];
// let steps = 3; 
// function rotateArray(arr, steps){
//     const n = arr.length; 
//     steps %= n;
//     return arr.slice(-steps).concat(arr.slice(0, -steps));
// }
// let result = rotateArray(arr, steps);
// console.log(result);

// function rotateArray(arr, steps) {
//     const n = arr.length;
//     // Ensure the number of steps is non-negative
//     steps = steps % n;
//     if (steps < 0) {
//         steps = n + steps;
//     }
//     // Rotate the array using Array.unshift and Array.pop
//     for (let i = 0; i < steps; i++) {
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }
// // Example usage:
// let arr = [1, 2, 3, 4, 5];
// let rotatedResult = rotateArray(arr, 2);
// console.log(rotatedResult);


// 5. Array Reversal:
// Reverse the elements of an array.

// let arr = [3, 6, 3, 65, 24, "hello"];
// function reverseArray(arr){
//     let x = 0;
//     let y = arr.length - 1;

//     while(x < y){
//         let temp = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp;

//         x++;
//         y--;
//     }
//     return arr;
// }
// console.log("The array: " + arr);
// console.log("Reversed array is: ", reverseArray(arr));


// 6. Array Sorting:
// Implement a simple sorting algorithm (e.g., Bubble Sort) to sort an array in ascending order.

// function bubbleSort(arr){
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [5, 4, 76, 23, 75, 24];
// let sortedArray = bubbleSort(arr);
// console.log(sortedArray);


// 7. Duplicate Elements:
// Find and remove duplicate elements from an array.

// let arr = [45, 6, 335, 65, 45, 3, 6];
// function removeDuplicateElement(arr){
//     let index = 0;
//     for(let i=0; i<arr.length; i++){
//         let isDuplicate = false;
//         for(let j=0; j<index; j++){
//             if(arr[i] === arr[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             arr[index++] = arr[i];
//         }
//     }
//     arr.length = index;
//     return arr;
// }
// let result = removeDuplicateElement(arr);
// console.log(result);


// 8. Search in Array:
// Implement linear search to find the position of a given element in an array.

// let arr = [45, 6, 335, 65, 45, 3, 6];
// let target = 335;
// function linearSearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == target){
//             return i;
//         }
//     }
//     return "target not in the array";
// }
// let searchResult = linearSearch(arr, target);
// console.log(searchResult)

        
// 9. Second Largest Element:
// Find the second-largest element in an array.

// function secondLargest(arr){
//     if(arr.length < 2){
//         return "Array should have atleast two elements.";
//     }
//     let first = arr[0];
//     let second = -Infinity;
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         } else if(arr[i] > second && arr[i] !== first){
//             second = arr[i];
//         }
//     }
//     if(second ===-Infinity){
//         return "there is no second-largest element.";
//     }
//     return second;
// }
// let arr = [6, 36, 4, 76, 54];
// let result = secondLargest(arr);
// console.log("the second largest element is", result);


// 10. Frequency of Elements:
// Count the frequency of each element in an array.

// function countFrequency(array){
//     const frequency = {};
//     for(let i=0; i<array.length; i++){
//         const element = array[i];
//         frequency[element] = (frequency[element] || 0) + 1;
//     }
//     return frequency;
// }
// let arr = [1, 2, 3, 4, 1, 2, 4, 5, 2, 3];
// let frequencyResult = countFrequency(arr);
// console.log(frequencyResult);


// Subarray Sum:
// Given an array of integers, find a subarray with a given sum.


// Q. Find the frequency of each character in a sentence.

// let str = "Given an array of integers, find a subarray with a given sum";
// let count = {};
// for(let i=0; i<str.length; i++){
//     let element = str[i];
//     if(element!==',' && element!==' '){
//         count[element] = (count[element] || 0) + 1;
//     }
// }
// console.log(count);


// Q. Find the highest number value from the given object.

// const letterCounts = {
//     G: 1,
//     i: 5,
//     v: 2,
//     e: 4,
//     n: 5,
//     a: 7,
//     r: 5,
//     y: 2,
//     o: 1,
//     f: 2,
//     t: 2,
//     g: 2,
//     s: 3,
//     d: 1,
//     u: 2,
//     b: 1,
//     w: 1,
//     h: 1,
//     m: 1
//   };
  
//   // Find the highest value
//   const highestValue = Math.max(...Object.values(letterCounts));
  
//   // Find the keys with the highest value
//   const keysWithHighestValue = Object.keys(letterCounts).filter(key => letterCounts[key] === highestValue);
  
//   // Find the lowest value
//   const lowestValue = Math.min(...Object.values(letterCounts));
  
//   // Find the keys with the lowest value
//   const keysWithLowestValue = Object.keys(letterCounts).filter(key => letterCounts[key] === lowestValue);
  
//   console.log('Highest Value:', highestValue, 'for key(s):', keysWithHighestValue);
//   console.log('Lowest Value:', lowestValue, 'for key(s):', keysWithLowestValue);


// Q. print a matrix of "*" 4/5
// *****
// *****
// *****
// *****

// let row = 4;
// let column = 5;
// for(let i=0; i<row; i++){
//     let count = "";
//     for(let j=0; j<column; j++){
//         count += "*"
//     }
//     console.log(count)
// }

// 12345
// 678910
// 1112131415

// let row = 4;
// let column = 5;
// let currentNum = 1;
// for(let i=1; i<=row; i++){
//     let count = "";
//     for(let j=1; j<=column; j++){
//         count += currentNum + ' ';
//         currentNum++;
//     }
//     console.log(count);
// }

// [ 1, 2, 3, 4, 5 ]
// [ 6, 7, 8, 9, 10 ]
// [ 11, 12, 13, 14, 15 ]
// [ 16, 17, 18, 19, 20 ]

// let row = 4;
// let column = 5;
// let currentNum = 1;
// for(let i=1; i<=row; i++){
//     let count = [];
//     for(let j=1; j<=column; j++){
//         count.push(currentNum);
//         currentNum++;
//     }
//     console.log(count);
// }


// [4, 6, 7, 8]
// [11, 51, 12, 32]
// [9, 10, 2, 21]

// const twoDArray = [
//     [4, 6, 7, 8],
//     [11, 51, 12, 32],
//     [9, 10, 2, 21]
// ];
// for(let i=0; i<twoDArray.length; i++){
//     let count = [];
//     for(let j=0; j<twoDArray[i].length; j++){
//         count.push(twoDArray[i][j])
//     }
//     console.log(count);
// }


// Q. Sum of the 2D array
// const twoDArray = [
//     [4, 6, 7, 8],
//     [11, 51, 12, 32],
//     [9, 10, 2, 21]
// ];
// let count = 0;
// for(let i=0; i<twoDArray.length; i++){
//     for(let j=0; j<twoDArray[i].length; j++){
//         count += twoDArray[i][j]
//     }
// }
// console.log(count);