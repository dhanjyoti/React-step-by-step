//  17. Calculate and print the product of numbers in a given range.

function productOfNumber(number){
    let product = 1;
    for(let i=1; i<=number; i++){
        product *= i;
    }
    return product;
}
const number = 5;
const result = productOfNumber(number);
console.log(`The product for ${number} is ${result}.`);