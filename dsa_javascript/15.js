// function calculateFactorial(number){
//     let factorial = 1;
//     for(let i=1; i<=number; i++){
//         factorial  *= i;
//     }
//     return factorial;
// }

// const number = 5;
// const result = calculateFactorial(number);

// console.log(`The factorial of ${number} is: ${result}`);


function calculateFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i<=number){
        factorial *= i;
        i++;
    }
    return factorial;
}


const number = 6;
const result = calculateFactorial(number);

console.log(`The factorial of ${number} is: ${result}`);
