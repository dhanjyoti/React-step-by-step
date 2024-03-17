// The partition problem is to determine whether a given set can be partitioned 
// into two subsets such that the sum of elements in both subsets is the same.

// Examples:
// Input: arr[] = {1, 5, 11, 5}
// Output: true
// The array can be partitioned as {1, 5, 5} and {11}

// Input: arr[] = {1, 5, 3}
1,3 = 4 
5// Output: false
// The array cannot be partitioned into equal sum sets.

function Sorted(arr){
    arr.sort((a,b)=>a-b);
    return arr
    }
    function SunSetSum(arr, largest){
        let sum=0;
        for(let i=0;i<arr.length;i++){
           if(arr[i] != largest){
               sum += arr[i];
           }
        }
        if(sum == largest){
            return true
        }
        return false
    }
    let arr = [1,5,3,1,5,5];
    Sorted(arr);
    let largest = arr[arr.length-1];
    let result = SunSetSum(arr,largest)
    console.log(result)