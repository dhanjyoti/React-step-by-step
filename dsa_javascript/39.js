//  39. Write a function to check if a number is positive, negative, or zero.

function negativePositiveZero(number){
    if(number > 0){
        return `${number} is positive!`;
    } else if(number<0){
        return `${number} is negative`;
    } else {
        return `${number} is zero`;
    }
}
let number = -254;
let result = negativePositiveZero(number);
console.log(result);