// Given a sorted array arr = [3,4,5,5,5,6,6,6,7,7,7,19, 23 , 23 25] and an integer X = 6 ; 
// Find the frequency of X in arr.


// int findCount(int arr[], int X){
// } O(logN)

// let arr = [3,4,5,5,5,6,6,6,7,7,7,19, 23 , 23, 25];
// let count = 0;
// let x = 23;
// for(let num of arr){
//     if(num == x){
//         count++;
//     }
// }
// console.time("time");
// console.log(count);
// console.timeEnd("time");

function findCount(arr, X) {
    let leftIndex = findLeftIndex(arr, X);
    let rightIndex = findRightIndex(arr, X);
    return rightIndex - leftIndex + 1;
}

function findLeftIndex(arr, X) {
    let left = 0;
    let right = arr.length - 1;
    let resultIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === X) {
            resultIndex = mid;
            right = mid - 1; // Continue searching on the left side
        } else if (arr[mid] < X) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return resultIndex;
}

function findRightIndex(arr, X) {
    let left = 0;
    let right = arr.length - 1;
    let resultIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === X) {
            resultIndex = mid;
            left = mid + 1; // Continue searching on the right side
        } else if (arr[mid] < X) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return resultIndex;
}

// Example usage
const arr = [3, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 19, 23, 23, 25];
const X = 6;
const frequency = findCount(arr, X);
console.time("time");
console.log(`The frequency of ${X} in the array is: ${frequency}`);
console.timeEnd("time");
