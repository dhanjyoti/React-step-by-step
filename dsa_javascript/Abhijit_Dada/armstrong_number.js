// Given a number x, determine whether the given number is Armstrong’s number or not.
// A positive integer of n digits is called an Armstrong number of order n (order is the number of digits) if
// abcd... = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + .... 
// Example: 

// Input:153
// Output: Yes
// 153 is an Armstrong number.
// 1*1*1 + 5*5*5 + 3*3*3 = 153

let num = 153;
function isArmstrongNumber(num){
    let numString = num.toString()
    let numLength = numString.length;
    let count = 0;
    let multiplier = 0;
    let finalValue = 0
    
    for(let i=0; i<numLength; i++){
        count += numString[i];
        multiplier = count%10;
        // console.log(multiplier ** numLength)
        finalValue += multiplier ** numLength;
    }
    if(num === parseInt(finalValue)){
        return true;
    }
    return false;
}
let result = isArmstrongNumber(num);
console.log(result)
