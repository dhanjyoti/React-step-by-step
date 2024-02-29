//   Given a number `n`. Find the factorial of that integer.

let num = 5;
let factorial = 1;
for(let i=2; i<=num; i++){
    factorial *= i;
}
console.log(factorial)
