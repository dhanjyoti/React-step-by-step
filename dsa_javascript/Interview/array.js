// 1. Given an array, find the maximum and minimum elements in it.

// let array = [3, 5, 7, 9, 56, 43, 3];
// let arrayLength = array.length;
// let maximumArray = array[0];
// let minimumArray = array[0];
// for(let i=0; i<arrayLength; i++){
//     if(maximumArray < array[i]){
//         maximumArray = array[i];
//     }
//     if(minimumArray >array[i]){
//         minimumArray = array[i];
//     }
// }
// console.log("maximum array is: ", maximumArray)
// console.log("minimum array is: ", minimumArray)


// 2. Reverse the elements of an array in-place.

// let array = [3, 5, 7, 7, 9,34, 54, 2, 4, 61];
// let arrayLength = array.length;

// let x = 0;
// let y = arrayLength - 1;
// while(x<y){
//     let temp = array[x];
//     array[x] = array[y];
//     array[y] = temp;

//     x++;
//     y--;
// }
// console.log(array)


// 3. Remove duplicate elements from an array, either sorted or unsorted.

// function removeDuplicate(arr){
//     let arrayLength = array.length;
//     if(arrayLength === 0){
//         return [];
//     }
//     let uniqueArray = [arr[0]]
//     for(let i=1; i<arrayLength; i++){
//         if(arr[i]!== arr[i-1]){
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }
// let array = [2, 4, 5, 6, 2, 5, 3, 6, 6, 2,2];
// let sortedArray = array.sort((a, b)=> a-b)
// let result = removeDuplicate(array);
// console.log(result)


// 4. Find the Missing Number in an Array
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// let array = [4, 0, 3, 6, 1, 2];


// function findMissingNumber(nums){
//     let missing = 0;
//     const n = nums.length;

//     //XOR operation of all the numbers from 0 to n
//     for(let i=0; i<=n; i++){
//         missing ^= i;
//     }
//     // XOR operation of all the elements in the array
//     for(let num of nums){
//         missing ^= num;
//     }
//     return missing;
// }
// let result = findMissingNumber(array);
// console.log(result)


// 5. Rotate an Array
// Rotate the elements of an array to the right by a specified number of steps.

// let array = [1, 3, 5, 7, 9, 10];
// let rotate = 3;
// function rotateArray(arr, steps){
//     for(let i=0; i<steps; i++){
//         arr.unshift(arr.pop());
//     }
//     return arr;
// }
// let result = rotateArray(array, rotate);
// console.log(result)


// 6. Kth Largest/Smallest Element in an Array
// Find the Kth largest or smallest element in an array.






// 7. Search in a Rotated Sorted Array
// Given a sorted array that has been rotated, find a specific target element.





// 8. Two Sum
// Given an array of integers, find two numbers such that they add up to a specific target number.

// function twoSum(nums, target) {
//     const numMap = {}; // Hash table to store complements

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         // If the complement exists in the hash table, return the indices
//         if (numMap[complement] !== undefined) {
//             return [numMap[complement], i];
//         }

//         // Otherwise, store the current number along with its index
//         numMap[nums[i]] = i;
//     }

//     // If no solution is found
//     return [];
// }

// // Example usage:
// let nums = [2, 7, 11, 15];
// let target = 9;
// console.log("Indices of two numbers:", twoSum(nums, target)); // Output: [0, 1]
