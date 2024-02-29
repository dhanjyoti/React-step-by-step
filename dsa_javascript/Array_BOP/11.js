//  11. Search for a specific element in an array.

let array = [23, 56, 34, 2, 4, 91, 12];

function searchElement(arr, target){
    for(let i=0; i<array.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
let search = 34;

let result = searchElement(array, search);

console.log(result);