//  10. Take user input for a number and print its factorial.

// const userInput = prompt("Enter number to find Factorial");
// const number = parseInt(userInput);
// let Factorial = 1;

// if(!isNaN(number)){
//     if(number<0){
//         alert("factorial is not able to find for negative number.");
//     } else if(number === 0){
//         console.log("factorial of 0 is 1.")
//     } else {
//         for(let i=1; i<=number; i++){
//             Factorial *= i;
//         }
//         console.log(`The factorial of ${number} is ${Factorial}.`);
//     } 
// }
// document.getElementById("hi").innerHTML = `The factorial of ${number} is ${Factorial}`

// ### In recursion ###

function factorial(n){
    if(n == 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 6;
let result = factorial(number);
console.log(result);