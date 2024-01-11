// Average of array

let arrayElements = [2, 5, 7, 8, 9];
let arrayLength = arrayElements.length;
let sum = 0;
for(let i=0; i<arrayLength; i++){
    sum += arrayElements[i];
}
let averageOfArray = sum / arrayLength;
console.log(averageOfArray)