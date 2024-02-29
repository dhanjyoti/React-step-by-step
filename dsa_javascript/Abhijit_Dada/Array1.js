// https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/

//  Given an array arr of n elements that is first strictly increasing and 
// then maybe strictly decreasing, find the maximum element in the array.

// Note: If the array is increasing then just print the last element will 
// be the maximum value.

function findPeak(arr, n){
    if(n == 1) return 0;
    if(arr[0] >= arr[1]) return 0;
    if(arr[n - 1] >= arr[n - 2]) return n - 1;

    for(let i=1; i<n-1; i++){
        if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) return i;
    }
}
let arr = [1, 2, 5, 6, 3, 4, 9, 5, 2];
let n = arr.length; 
console.log("index of peak point is " + findPeak(arr, n));