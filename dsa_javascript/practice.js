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

let arr = [3, 5, 4, 23, 67, 2];
let max = 0;
for(let i=0; i<arr.length; i++){
    max = max + arr[i];
}
let avg = max/arr.length;

console.log(avg.toFixed(2))