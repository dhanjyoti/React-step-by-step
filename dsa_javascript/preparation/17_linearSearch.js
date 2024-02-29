//  Linear Search

let arr = [6, 7, 8, 9, 1, 2, 3, 4, 5];
let target = 5;
function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(target === arr[i]){
            return i;
        }
    }
    return -1;
}
let result = linearSearch(arr, target);
console.log(result);