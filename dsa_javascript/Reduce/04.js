//  4. Calculate the average of elements in an array.

let arr = [2, 4, 7, 3];

const output = arr.reduce((sum, cur)=> {
    sum = sum + cur;
    return sum;
}, 0);
console.log(output/arr.length);
