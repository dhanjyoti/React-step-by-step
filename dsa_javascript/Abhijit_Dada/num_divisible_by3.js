let number1 = '123';

function divisibleBy3(num){
    let numberArray = num.split(''); //1,2,3
    let numberLength = numberArray.length; // 3
    
    let sum = 0;
    for(let i=0; i<numberLength; i++){
        sum += parseInt(numberArray[i]);
    }
    if(sum % 3 == 0){
        console.log(`${num} is divisible by 3`)
        return true;
    }
    return false
}
let result = divisibleBy3(number1);
console.log(result)

export default divisibleBy3;