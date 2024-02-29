//  Binary Search

let arr = [2, 3, 5, 6, 8, 9, 12];
let target = 9;
function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2);
        if(target === arr[mid]){
            return mid;
        }
        if(target < arr[mid]){
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, target));
