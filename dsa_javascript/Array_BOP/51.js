// print all possible arrays in from a given array

let array = [0, 1, 2, 3];
let n = 4;
function subArrays(arr, n){
    let subArray = [];
    let arrLength = parseInt(Math.pow(2, n), 10);
    for(let i=1; i<arrLength; i++){
        let subArray1 = [];
        for(let j=0; j<n; j++){
            if ((i & (1 << j)) != 0){
                subArray1.push(arr[j]);
            }
        }
        subArray.push(subArray1);
    }
    return subArray;
}

let result = subArrays(array, n);
console.log(result);
