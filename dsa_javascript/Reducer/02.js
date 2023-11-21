// 2. Find the sum of all elements in an array.

let array = [4, 6, 8, 32];

let output = array.reduce((sum, current) => {
    return sum + current;
}, 0);

console.log(output);