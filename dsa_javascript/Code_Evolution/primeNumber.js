//  Given a number `n`. Determine if the number is prime or not.

// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2; i<n; i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(1))
// console.log(isPrime(7))
// console.log(isPrime(12))
// console.log(isPrime(11))

// Big O = O(n)

// Optimize version

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(1))
console.log(isPrime(7))
console.log(isPrime(12))
console.log(isPrime(11))