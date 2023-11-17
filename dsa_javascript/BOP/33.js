//  33. Write a function to check if a number is prime.

function isPrimeNumber(number){
    if(number<2){
        return false;
    } 
    for(let i=2; i<Math.sqrt(number); i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}
let number = 3;

if(isPrimeNumber(number)){
    console.log(`${number} is prime!`);
} else {
    console.log(`${number} is not prime!`);
}