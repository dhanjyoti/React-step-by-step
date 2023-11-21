//  9. Check if an array is sorted in ascending order.

const array = [1, 5, 7, 8, 11];

function isSortedAscending(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
let result = isSortedAscending(array);

console.log(result);