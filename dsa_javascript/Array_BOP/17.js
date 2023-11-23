// 17. Rotate an array by a specified number of positions.

const number = [1, 2, 3, 4, 5, 6, 7];
const rotate = 4;

function arrayRotation(arr, numberOfShifts){
    for(let i=0; i<numberOfShifts; i++){
        arr.unshift(arr.pop());
        console.log(`step ${i+1}: `, arr);
    }
}
console.log("Final result: ", arrayRotation(number, rotate));