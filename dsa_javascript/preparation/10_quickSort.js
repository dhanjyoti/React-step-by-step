//  Quick Sort

let arr = [4, 7, 9, 14, 7, 3, 13, 2, 1, 6];

function quickSort(arr){
    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
let result = quickSort(arr);
console.log(result);