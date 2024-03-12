// Write a program to cyclically rotate an array by one.
// Input:
// N = 6
// A[] = {1, 2, 3, 4, 5}
// Output: 5 1 2 3 4

let arr = [1, 2, 3, 4, 5];
let rotate = 6;
function rotateArray(arr, rotate){
    for(let i=0; i<rotate; i++){
        arr.unshift(arr.pop())
    }
    return arr;
}
console.log(rotateArray(arr, rotate))