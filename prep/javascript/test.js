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


