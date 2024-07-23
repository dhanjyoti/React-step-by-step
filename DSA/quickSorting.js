let arr = [7, 4, 8, 2, 8, 9, 1, 3];

let array = 
[7, 4, 2, 1, 3, 8, 8, 9]
[4, 2, 1, 3, 7, 8, 8, 9]
[2, 1, 3, 4, 7, 8, 8, 9]
[1, 2, 3, 4, 7, 8, 8, 9]

function quickSort(arr){
    if(arr.length <= 1) return arr;

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
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(arr))

// Time complexity O(n^2)
// Pivot and partition rule
// Space conplexity 0

//

// bubble sort
// selection sort
// insertion sort