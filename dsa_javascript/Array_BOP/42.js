//     42. Find the union of two sorted arrays.

// function findUnion(arr1, arr2){
//     let unionArray = [];
//     let i = 0;
//     let j = 0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] < arr2[j]){
//             unionArray.push(arr1[i]);
//             i++;
//         }
//         else if(arr1[i] > arr2[j]){
//             unionArray.push(arr2[j]);
//             j++;
//         } else {
//             unionArray.push(arr1[i]);
//             i++;
//             j++;
//         }
//     }
//     while(i<arr1.length){
//         unionArray.push(arr1[i]);
//         i++;
//     }
//     while(j<arr2.length){
//         unionArray.push(arr2[j]);
//         j++;
//     }
//     return unionArray;
// }
// let sortedArray1 = [1, 3, 5, 6, 7, 9];
// let sortedArray2 = [2, 4, 6, 7, 9, 10];
// let union = findUnion(sortedArray1, sortedArray2);
// console.log(union);

let arr = [2, 5, 7, 9, 4, 6];
let arr1 = [3, 6, 8, 2, 6, 9];
let joined = [...arr, ... arr1];
let union = new Set(joined);
let newArray = Array.from(union);
console.log(newArray)