//  6. Find the smallest element in an array.

let arr = [2, 4, 7, 3];

const output = arr.reduce((min, cur) => {
    if(min > cur){
        min = cur;
    }
    return min;
}, arr[0]);

console.log(output);