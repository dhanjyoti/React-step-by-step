//  30. Implement a binary search algorithm.

function binarySearch(array, target){
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2);
        if(target === array[mid]){
            return mid;
        }
        if(target < array[mid]){
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 3, 5, 7, 9], 7));
console.log(binarySearch([-5, 3, 5, 7, 9], -5));
console.log(binarySearch([-5, 3, 5, 7, 9], 10));