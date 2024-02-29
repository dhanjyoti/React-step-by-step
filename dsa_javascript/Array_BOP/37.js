//     37. Find the largest element in a 2D array.

//   [4, 6, 7, 8],
//   [11, 51, 12, 32],
//   [9, 10, 2, 21]

const matrix = [
   [4, 6, 7, 8],
   [11, 51, 12, 32],
   [9, 10, 2, 21] 
];
let largest = 0;
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        if(matrix[i][j] > largest){
            largest = matrix[i][j];
        }
    }
}
console.log(largest)