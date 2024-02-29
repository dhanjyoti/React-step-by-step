let numberString = '789344';
// let lastDigit = numberString.charAt(numberString.length-1);
// let secondLastDigit = numberString.charAt(numberString.length-2);
// let sumOfLastTwoDigit = parseInt(lastDigit) + parseInt(secondLastDigit);
// if(sumOfLastTwoDigit%4 === 0){
//     console.log(`${numberString} is divisible 4`);
// } else {
//     console.log(`${numberString} is not divisible by 4`)
// }

let lastTwoDigits = numberString % 100;
let lastTwoDigitsArray = lastTwoDigits.toString().split('');
let digitsLength = lastTwoDigitsArray.length;

let sum = 0;
for(let i=0; i<digitsLength; i++){
    sum += parseInt(lastTwoDigitsArray[i]);
}

if(sum % 4 === 0){
    console.log(`${numberString} is divisible by 4`);
} else {
    console.log("number not divisible by 4")
}
