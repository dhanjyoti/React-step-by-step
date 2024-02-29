//  find factorial of a given number.

let num = 6;
function findFactorial(num){
    let factorial = 1
    for(let i=1; i<=num; i++){
        factorial *= i;
    }
    return factorial;
}
let result = findFactorial(num);
console.log(result);
