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


        
        
