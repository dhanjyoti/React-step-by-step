let number1 = '123';
let numberArray = number1.split(''); //1,2,3
let numberLength = numberArray.length; // 3

let sum = 0;
for(let i=0; i<numberLength; i++){
    sum += parseInt(numberArray[i]);
}
if(sum % 3 == 0){
    console.log(`${number1} is divisible by 3`)
} else {
    console.log(`${number1} is not divisible by 3`)
}