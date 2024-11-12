// function* count(){
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
//     yield 12;
// }
// const even = count();

// for(const v of even){
//     console.log(v);
// }




// const myPromise = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("promise ses")
//     }, 1000)
// })
// myPromise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })


// document.addEventListener("DOMContentLoaded", ()=>{
//     const button = document.getElementById("btn");

//     const buttonCLickPromise = new Promise((res, rej)=>{
//         button.addEventListener('click',()=>{
//             res("Button was clicked");
//         })
//     })

//     buttonCLickPromise.then((message)=>{
//         console.log(message);
//     })
//     console.log(buttonCLickPromise)
// })


// async function myFn(){
//     // throw new Error;
//     // return " hello"
//     return new Promise((res, rej)=>{

//     })
// }
// const res = myFn();
// console.log(res)
// setTimeout(()=>{
//     console.log("After 5 sec: ", res);
// }, 5000)

// class student{
//     constructor(name){
//         this.stdname = name;
//         console.log("constructor");
//     }
//     hello(){
//         console.log(`hello ${this.stdname}`);
//     }
//     static staticHello(){
//         console.log("static hello");
//     }
// }
// let a = new student("dhanjyoti");
// a.hello();
// student.staticHello();

// function prom(a, b){   
//     return new Promise(function (resolve, reject){
//         console.log("Fetching data, please wait");
//         var c = a/b;
//         setTimeout(()=>{
//             if(a, b){
//                 resolve(`I am successful: ${c}`);
//             } else {
//                 reject("I am failed");
//             }
//         }, 2000)
//     })
// }

// prom(5, 2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// async function prom(){
//     try {
//         console.log("Fetching data, please wait");
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(!response.ok){
//             throw new Error("Netwwork response was not okay");
//         }
//         const data = await response.json();
//         console.log(data);

//         return data;
//     } catch(error){
//         console.error("Error fetching data: ", error);
//         throw error;
//     }
// }

// prom().then((result)=> {
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// let multiply = function(x, y){
//     console.log(x*y);
// }

// let multiply2 = function (x){
//     return function(y){
//         console.log(x*y)
//     }
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(4);

// let multiplyMax = multiply2(2);
// multiplyMax(3);f

const div = document.querySelector("div");
const p = document.getElementsByTagName("p")[0];
const button = document.getElementsByTagName("button")[0];

div.addEventListener('click',()=>{
    console.log("third");
})
p.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("second");
})
button.addEventListener('click',()=>{
    console.log("first");
})