//  Quick Sort

let arr = [7, 4, 8, 2, 4, 7, 8, 9, 1, 3];

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(arr));