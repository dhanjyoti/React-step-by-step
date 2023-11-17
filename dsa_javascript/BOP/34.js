//  34. Write a function to calculate the power of a number.

function powerOfNumber(number, power){
    if(number<0 || !Number.isInteger(number)){              //if(number<0 || ppower<0)
        return "Not possible for negative number";
    }
    let result = 1;
    for(let i=0; i<power; i++){
        result *= number;
    }
    return result;
}
const number = -5;
const power = 3;

const NumberPower = powerOfNumber(number, power);
console.log(NumberPower); 