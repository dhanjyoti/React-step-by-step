//  10. Check if an array is sorted in descending order.

let array = [20, 18, 12, 8, 7, 3];

// function isSortedDescending(arr){
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] < arr[i + 1]){
//             return false;
//         }
//     }
//     return true;
// }
// let result = isSortedDescending(array);
// console.log(result);

function bubbleSort(array){
    let len = array.length;
    for(let i=0; i<len-1; i++){
        for(let j=0; j<len-i-1; j++){
            if(array[j]<array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
let result = bubbleSort(array);
console.log(array)