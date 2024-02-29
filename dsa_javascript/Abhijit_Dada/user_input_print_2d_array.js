let row = parseInt(prompt("Please enter row: "));
let column = parseInt(prompt("Please enter column: "));
let arr = [[]];
for(let i=0; i<row; i++){
    for(let j=0; j<column; j++){
        let value = parseInt(prompt(`Please enter value of  [${i}][${j}]`));
        arr[i][j] = value;
    }
}
document.write(arr);