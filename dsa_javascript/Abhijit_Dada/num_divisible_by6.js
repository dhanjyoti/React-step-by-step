function divisibleBy2(num){
    let lastDigit = num.charAt(num.length-1);
    if(lastDigit%2 === 0){
        console.log(`${num} is divisible by 2`);
        return true;
    }
    return false;
}
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
    return false;
}
function divisibleBy6(num){

    if((divisibleBy2(num)) && divisibleBy3(num)){
        return true;
    }
    return false;
}
let num = '7657362';
let result = divisibleBy6(num);
console.log(result)