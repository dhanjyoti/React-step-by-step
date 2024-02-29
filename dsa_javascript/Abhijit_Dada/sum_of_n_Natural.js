// function sumOfNaturalNum(num){
//     let sum = 0;
//     for(let i=0; i<=num; i++){
//         sum += i;
//     }
//     return sum;
// }
// let num = 6;
// let result = sumOfNaturalNum(num);
// console.log(result)

function sumOfNaturalNum(num){
    return num*(num+1)/2;
}
let num = 6;
let result = sumOfNaturalNum(num);
console.log(result)