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
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//     }
//     // Function to insert a node at the end of the linked List
//     insertAtEnd(data){
//         const newNode = new Node(data);

//         //  If the list is empty, set the new node as the head
//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         //  Traverse to the end of the list
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         // Set the next pointer of the last node to the new node
//         current.next = newNode;
//     }

//     findLength(){
//         let length = 0;
//         let current = this.head;
//         while(current !== null){
//             length++;
//             current = current.next;
//         }
//         return length;
//     }

//     //  Function to print the linked list
//     printList(){
//         let current = this.head;
//         while(current !== null){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }
// const myList = new LinkedList();
// myList.insertAtEnd(1);
// myList.insertAtEnd(2);
// myList.insertAtEnd(3);
// myList.insertAtEnd(3);
// myList.insertAtEnd(3);

// myList.printList();
// console.log("before");
// const length = myList.findLength();
// console.log("length: ", length);

// let x = 30;
// let y;
// let c = x + y;
// if( y == undefined){
//     console.log("something went wrong")
// }

// let obj = {
//     name: "dhan"
// };
// //  let user = Object.assign({}, obj);  // or
//  let user = {...obj};
// user.name = "Jyoti"

// console.log("Object is :", obj);
// console.log("User is :", user);


// fetch('https://gorest.co.in/public/v2/users')
// .then(response => response.json())
// .then(data =>{
//     document.getElementById("apiCall").textContent = JSON.stringify(data, null, 2);
// }).catch(error => console.error('Error: ', error));

// fetch("https://gorest.co.in/public/v2/users")
// .then(res => res.json())
// .then(data =>{
//     console.log(data)
// })
// .catch(error=>console.error("error", error))

const prefixNum=(numbers)=>{
    return numbers.map(num=> `ab.${num}`)
}
const inputNum = [4, 7, 9, 13, 23];
const output = prefixNum(inputNum);
console.log(output)