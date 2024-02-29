let matrics = 
[[1, 2,3],
[25, 6, 7]];
let row = 2;
let column = 3;

function matrixMaximumValue(matrics, row, column){
    let maximumValue = matrics[0][0];
    for(let i=0; i<row; i++){
        for(let j=0; j<column; j++){
            if(maximumValue < matrics[i][j]){
                maximumValue = matrics[i][j];
            }
        }
    }
    return maximumValue;
}
let resultValue = matrixMaximumValue(matrics, row, column);
console.log(resultValue)
