//  Merge Sort

let arr = [6, 4, 23, 64, 65, 12, 67, 42];

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
function merge(left, right){
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}
let result = mergeSort(arr);
console.log(result)

// first part log n
// there is loop so the time complexity is linear
// finally O(nlogn)

// most efficient sortinng