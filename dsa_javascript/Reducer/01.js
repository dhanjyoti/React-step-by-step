//  1. Print the elements of an array.

let array = [4, 6, 8, 32];

const output = array.reduce((acc, cur)=>{
    console.log(cur);
}, 0);