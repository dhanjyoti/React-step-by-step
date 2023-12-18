//  24. Check if an array contains a subarray with a given sum.

let array = [1, 4, 20, 3, 10, 5];
let sum = 33;

function hasSubarrayWithSum(arr, targetsum){
    let start = 0;
    let currentSum = 0;

    for(let i=0; i<arr.length; i++){
        currentSum += arr[i];

        while(currentSum > targetsum && start <= i){
            currentSum -= arr[start];
            start++;
        }

        if(targetsum === currentSum){
            return true;
        }
    }
    return false;
}

if(hasSubarrayWithSum(array, sum)){
    console.log("Subarray found with the given sum");
} else {
    console.log("No subarray found with the given sum");
}
