/* Prefix sum(algorithm)

Given an array of integers of size n. Answer q quaries 
where you need to print the sum of values in a given range of indices from l to r(both included).
Note: The values of l and r in quaries follow 1-based indexing. */

let arr = [6, 3, -2, 4, -1, 0, -5];
let start = 2;
let end = 4;

function prefixSum(arr, start, end){
    let result = 0;
    for(let i=start; i<=end; i++){
        result += arr[i];
    }
    return result;
}
console.log(prefixSum(arr, start,  end))