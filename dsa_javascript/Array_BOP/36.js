// 36. Find the sum of all elements in a 2D array.

const twoDArray = [
    [4, 6, 7, 8],
    [11, 51, 12, 32],
    [9, 10, 2, 21]
];
let count = 0;
for(let i=0; i<twoDArray.length; i++){
    for(let j=0; j<twoDArray[i].length; j++){
        count += twoDArray[i][j]
    }
}
console.log(count);