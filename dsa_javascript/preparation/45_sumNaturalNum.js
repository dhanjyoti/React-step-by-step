// Sum of natural numbers using recursion

let num = 20;
function sumOfNaturalNum(num){
    if(num > 0){
        return num + sumOfNaturalNum(num - 1);
    } 
    return num;
}
console.log(sumOfNaturalNum(num))
