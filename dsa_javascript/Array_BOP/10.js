//  10. Check if an array is sorted in descending order.

let array = [20, 18, 12, 8, 7, 3];

function isSortedDescending(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < arr[i + 1]){
            return false;
        }
    }
    return true;
}
let result = isSortedDescending(array);
console.log(result);