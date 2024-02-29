//  Given a number `n`, find if the number is prime por not

// function isPrime(num){
//     let res = '';
//     if(num == 2) return 'Prime';
//     if(num <= 1) return 'not Prime';
//     for(let i=2; i<num; i++){
//         if(num%i == 0){
//             res = 'not Prime';
//             break;
//         } else {
//             res = 'Prime';
//         }
//     }
//     return res;
// }
// console.log(isPrime(1));
// console.log(isPrime(11));
// console.log(isPrime(2));
// console.log(isPrime(23));
// console.log(isPrime(14));

//  Given a number `n`, print all Prime numbers given till `n`

function printPrime(num){
    let result = [];
    for(let i=2; i<=num; i++){
        let j = 2;
        for(j=2; j<i; j++){
            if(i%j == 0){
                break;
            }
        }
        if(i == j){
            result.push(i);
        }
    }
    return result;
}
console.log(printPrime(30))