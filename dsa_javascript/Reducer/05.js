//  5. Find the largest element in an array.

let arr = [2, 4, 7, 3];

let output = arr.reduce((max, cur)=> {
    if(max<cur){
        max = cur;
    }
    return max;
}, 0);

console.log(output);