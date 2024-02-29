let num = 625;

function checkPerfectSquare(num){
    let numSquare = Math.sqrt(num);
    let outputSquareRoot = Math.trunc(numSquare);
    if((outputSquareRoot * outputSquareRoot) == num){
        return true;
    }
    return false;
}
let result = checkPerfectSquare(num);
console.log(result);
