//  Rotate an array by a specified number of positions.


const arr = [1, 2, 3, 4, 9, 8, 7, 6];
const rotate = 3;

function arrayRotation(arr, rotate){
    for(let i=0; i<rotate; i++){
        arr.unshift(arr.pop());
    }
    return arr;
};
console.log(arrayRotation(arr, rotate));