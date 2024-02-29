// console.log("start");

// async function asyncFunction(){
//     console.log("I am microtask");
// }

// const data = ()=> {
//     setTimeout(()=>{
//         console.log("I am macroTask");
//     },0)
// }
// data()
// asyncFunction()
// global();
// console.log("end");

// function global(){
//     console.log("normal Function");
// }

// Web api

// function dataFetch(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const success = true;
//             if(success){
//                 resolve("work done successfully");
//             } else {
//                 reject("Error, unable to do work")
//             }
//         }, 1000);
//     })
// }
// // dataFetch().then((result)=>{
// //     console.log(result);
// // }).catch((error)=>{
// //     console.log(error);
// // })
// const myPromise = dataFetch();
// async function myAsync(){
//     const result = await myPromise;
//     console.log(result);
// } 
// myAsync();

// // where every there is a complex application of code eg: 

// const { log } = require('console');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let userInputArray = [];
// function takeUserInput(){
//     rl.question("Enter an element: ", (input)=>{
//         if(input.toLowerCase() === 'done'){
//             console.log("entered element: ", userInputArray);
//             rl.close();
//         } else {
//             userInputArray.push(input);
//             takeUserInput();
//         }
//     })
// }
// takeUserInput();

// let arr = [3, 5, 4, 23, 67, 2];
// let max = 0;
// for(let i=0; i<arr.length; i++){
//     max = max + arr[i];
// }
// let avg = max/arr.length;

// console.log(avg.toFixed(2))

// let originalColor = 'white';
// function background(){
//     let currentColor = document.body.style.backgroundColor;
//     if(currentColor == 'blue'){
//         document.body.style.backgroundColor = originalColor;
//     } else {
//         document.body.style.backgroundColor = 'blue';
//     }
// }

//  19. Find the first non-repeated character in a string.


// 12345
// 678910
// 1112131415

// let row = 4;
// let column = 5;
// let count = 1;
// for(let i=1; i<=row; i++){
//     for(let j=1; j<=column; j++){
//         process.stdout.write(count.toString());
//         count+= 1
//     }
//     process.stdout.write('\n');
// }

// let arr1 = [2, 5, 78, 5, 8, 43];
// let arr2 = [6, 7, 78, 9, 3, 5, 2];
// let arr = [4, 6, 2, 4, 7, 9, 4, 2, 6, 2, 5, 6, 2]; 
// let arr = [12, 2, 35, 78, 5, 83, 43, 5, 5];

// function longestSubstringLength(s) {
//     let n = s.length;
//     if (n === 0) return 0;
    
//     let lastSeen = {};
//     let maxLength = 0;
//     let start = 0;
    
//     for (let end = 0; end < n; end++) {
//         if (s[end] in lastSeen) {
//             start = Math.max(start, lastSeen[s[end]] + 1);
//         }
        
//         lastSeen[s[end]] = end;
//         maxLength = Math.max(maxLength, end - start + 1);
//     }
    
//     return maxLength;
// }


// function mergeArray(arr1, arr2, arr3) {
//     let newArr = [];
//     let i = 0;
//     let j = 0;
//     let k = 0;
    
//     while (i < arr1.length && j < arr2.length && k < arr3.length) {
//         if (arr1[i] < arr2[j] && arr1[i] < arr3[k]) {
//             newArr.push(arr1[i]);
//             i++;
//         } else if (arr2[j] < arr1[i] && arr2[j] < arr3[k]) {
//             newArr.push(arr2[j]);
//             j++;
//         } else if (arr3[k] < arr1[i] && arr3[k] < arr2[j]) { // Corrected condition
//             newArr.push(arr3[k]);
//             k++;
//         }
//     }

//     while (i < arr1.length) {
//         newArr.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         newArr.push(arr2[j]);
//         j++;
//     }
//     while (k < arr3.length) {
//         newArr.push(arr3[k]);
//         k++;
//     }

//     return newArr;
// }

// let arr1 = [1, 3, 7];
// let arr2 = [2, 4, 8];
// let arr3 = [9, 10, 11];

// let result = mergeArray(arr1, arr2, arr3);

// console.log("mergeArray", result);


