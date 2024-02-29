function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length-1);
}
function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    let mid = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[mid]){
        return mid;
    }
    if(target < arr[mid]){
        return search(arr, target, leftIndex, mid - 1);
    } else {
        return search(arr, target, mid + 1, rightIndex);
    }
} 
console.log(recursiveBinarySearch([3, 4, 6, 7, 9], 7))