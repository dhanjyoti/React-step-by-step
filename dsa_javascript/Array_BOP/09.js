//  9. Check if an array is sorted in ascending order.

// const array = [1, 5, 7, 8, 11];
// function isSortedAscending(arr){
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] > arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }
// let result = isSortedAscending(array);
// console.log(result);

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [3, 1, 5, 8, 4];
arr = bubbleSort(arr);
console.log(arr); // This will output [1, 3, 4, 5, 8]