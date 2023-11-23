//  8. Count the number of odd elements in an array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddArray = arr.reduce((accumulator, currentValue)=>{
    if(currentValue % 2 !== 0){
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log("Array of odd elements: ", oddArray);