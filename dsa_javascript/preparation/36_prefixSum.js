//  Given an integer array 'a', return the prefix sum/running sum in the same array without creating a new array.

// Prefix sum(algorithm)

let arr = [6, 3, -2, 4, -1, 0, -5];

function prefixSum(arr){
    for(let i=1; i<arr.length; i++){
        arr[i] += arr[i-1];
    }
    return arr;
}
console.log(prefixSum(arr))