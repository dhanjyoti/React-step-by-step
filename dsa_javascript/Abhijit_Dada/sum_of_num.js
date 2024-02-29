let num = 567;
let numString = num.toString();
let numArray = numString.split('');
let numLength = numArray.length;


let sum = 0;
for(let i=0; i<numLength; i++){
    sum += parseInt(numArray[i]);
}
console.log(sum);