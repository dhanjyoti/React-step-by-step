// 38. Find the transpose of a 2D array.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
function transpose(arrayMatrix){
    const result = [];
    for(let i=0; i<arrayMatrix[0].length; i++){
        const column = [];
        for(let j=0; j<arrayMatrix.length; j++){
            // 0,0
            // 1,0
            // 2,0
            // 0,1
            // 1,1
            // 2,1
            // 0,2
            // 1,2
            // 2,2
            column.push(arrayMatrix[j][i]) 
        }
        result.push(column);
    }
    return result;
}
let finalResult = transpose(matrix);
console.log(finalResult);