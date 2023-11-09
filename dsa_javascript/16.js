//  16. Calculate and print the sum of even numbers from 1 to 100.

function sumOfEvenNumbers(number){
    let sum = 0;
    for(let i=1; i<=number; i++){
        if(i%2 === 0){
            sum += i;
        }
    }
    return sum;
}
const number = 100;
const result = sumOfEvenNumbers(number);
console.log(`The sum of even numbers for ${number} is ${sumOfEvenNumbers(number)}`);