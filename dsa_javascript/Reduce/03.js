// 3. Find the product of all elements in an array.

let arr = [2, 4, 7, 3];

const output = arr.reduce((mul, current) => {
    return mul * current;
}, 1);

console.log(output);