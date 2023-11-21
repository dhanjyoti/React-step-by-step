//  12. Find the index of the first occurrence of a given element.

function firstOccurance(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
const array = [2, 5, 6, 5, 8, 6, 3];
const key = 6;

const index = firstOccurance(array, key);

if(index !== -1){
    console.log(index);
} else{
    console.log("not found");
}