// "https://gorest.co.in/public/v2/users"

// fetch("https://gorest.co.in/public/v2/users").then(res => res.json())
// .then((data)=>{
//     document.getElementById("api").textContent = JSON.stringify(data, null, 2)
// })
// .catch(error =>{
//     console.error("Error", error)
// })

// async function fetchData() {
//     try {
//         const response = await fetch("https://gorest.co.in/public/v2/users");
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         document.getElementById("api").textContent = JSON.stringify(data, null, 2);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Call the async function
// fetchData();

// async function fetchData(){
//     try{
//         const res = await fetch("https://gorest.co.in/public/v2/users");
//         if(!res.ok){
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const data = await res.json();
//         document.getElementById('api').textContent = JSON.stringify(data, null, 2);
//     } catch(error){
//         console.error("Error: ", error);
//     }
// }
// fetchData();

// (function(){
//     setTimeout(()=> console.log(1), 2000);
//     console.log(2);
//     setTimeout(()=> console.log(3), 0);
//     console.log(4);
// })()

// let x = 5;
// for(let i=1; i<=x; i++){
//     let string = '';
//     let count = "abc".charCodeAt(0);
//     for(let j=1; j<=i; j++){
//         string += String.fromCharCode(count);
//         count++
//     } 
//     console.log(string);
// }

// let x = 5; 
// for(let i=x; i>0; i--){
//     let string = '';
//     let count = "A".charCodeAt(0);
//     for(let j=0; j<i; j++){
//         string += String.fromCharCode(count);
//         count++;
        
//     }
//     console.log(string);
// }

// let x = 5;
// for(let i=x; i>0; i--){
//     let string = '';
//     for(let k=0; k<x-i; k++){
//         string += '_'
//     }
//     for(let j=0; j<i; j++){
//         string += "*"
//     }
//     console.log(string);
// }

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// const x = 4;
// for(let i=1; i<=x; i++){
//     let string = '';
//     let count = 'A'.charCodeAt(0);
//     for(let k=0; k<x-i; k++){
//         string += ' ';
//     }
//     for(let j=0; j<i; j++){
//         string += String.fromCharCode(count + j);
//     }
//     for(let j=i-2; j>=0; j--){
//         string += String.fromCharCode(count + j);
//     }
//     console.log(string);
// }

// const numberOfRows = 5;
// let currentNumber = 1;

// for (let i = 1; i <= numberOfRows; i++) {
//   let row = '';

//   for (let j = 1; j <= i; j++) {
//     row += currentNumber + ' ';
//     currentNumber++;
//   }

//   // Remove the trailing space and log the row
//   console.log(row);
// }

//

// 1.  Pass by Value works only on Primitive Datatypes. 
    // Eg- number, boolean, BigInt, undefined, null, string, symbol
// 2.  In pass by value original copy of the data is copied.
// 3.  The function receives a copy of the variable's value,
//     and any changes made to the parameter inside the function 
//     do not affect the original variable outside the function.



// 1.  Pass by Reference works only on Non-primitive Datatypes.
    // Eg- Object
// 2.  In pass by reference the memory location is copied 
//     or the reference value is copied
// 3.  Any changes made to the parameter inside the function affect 
//     the original variable outside the function because they both 
//     point to the same memory location.

// function addition(){
//     return "hello world";
// }
// console.log(addition())
// let a = 3;
// console.log(a + addition())

// Immediately Invoked Function Expression(IIFE)

// Code Example:
// (function addition(){
//     console.log("hello world");
// })()


// const div = document.getElementById('element-div')

// div.addEventListener("click", (e)=>{
//     if(e.target.tagName == "BUTTON"){
//         // console.log("I am clicked")
//         console.log(e.target.innerText)
//     }
// })

// function counter(){
//     let count = 1;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// }
// const cccc = counter();
// cccc();

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
//     x();


// const button = document.getElementsByTagName("button")[0];

// button.addEventListener('click', ()=>{
//     document.write("button clicked");
// })

// Arrow Function

// let multiply = () => {
//     return (
//         console.log("hello")
//     )
// }
// multiply()

// Immediately Invoking Function Expression(IIFE)



function hoc(){
    return function(){
        console.log("hello");
    }
}
let fff = hoc()();

