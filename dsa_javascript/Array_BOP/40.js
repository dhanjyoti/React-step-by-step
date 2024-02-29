// 40. Perform matrix multiplication on two 2D arrays.

const twoDArray = [
    [1, 2],
    [3, 4],
];
let count = 1;
for(let i=0; i<twoDArray.length; i++){
    for(let j=0; j<twoDArray[i].length; j++){
        count *= twoDArray[i][j]
    }
}
console.log(count)

  
  