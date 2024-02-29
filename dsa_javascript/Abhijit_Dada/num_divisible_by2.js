let number1 = '34531';

function divisibleBy2(num){
    let lastDigit = num.charAt(num.length-1);
    if(lastDigit%2 === 0){
        console.log(`${num} is divisible by 2`);
        return true;
    }
    return false;
}
let result = divisibleBy2(number1);
console.log(result)

export default divisibleBy2;