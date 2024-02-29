// Question: Given a positive integer 'n',  determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer 'x' such that 'n'  === 2x
// isPowerOfTwo(1) = true;
// isPowerOfTwo(2) = true;
// isPowerOfTwo(5) = false;

function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
   }
   return true;
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(12))

// Big-O = O(log n) 

// Optimized
// function isPowerOfTwo(n){
//     if(n<1){
//         return false;
//     }
//     return (n & (n - 1)) === 0;
// }
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwo(12))