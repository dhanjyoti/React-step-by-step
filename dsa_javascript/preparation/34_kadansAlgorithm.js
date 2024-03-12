//  Kadan's algorithm -> 
//  Find the maximum sum of the contigious sub array

let arr = [-1, 3, 4, -5, 6, 8, 10, -11];

// function maxSubArray(arr){
//     if(!arr) return 0;
//     if(arr && arr.length === 1){
//         if(arr[0] < 0){
//             return 0;
//         }
//         return arr[0];
//     }
//     let sum = 0;
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//         if(sum > max){
//             max = sum;
//         }
//         if(sum < 0){
//             sum = 0;
//         }
//     }
//     return max;
// }
// let result = maxSubArray(arr);
// console.log(result);


function kadanasAlgorithm(arr){
    let sum = 0;
    let maxi = arr[0];
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        maxi = Math.max(maxi, sum);
        if(sum<0){
            sum = 0;
        }
    }
    return maxi;
}
console.log(kadanasAlgorithm(arr))


// function maxSumOfArray(arr){
//     let maxEnding = arr[0];
//     let maxFinal = arr[0];

//     for(let i=1; i<arr.length; i++){
//         maxEnding = Math.max(arr[i], maxEnding + arr[i]);
//         maxFinal = Math.max(maxFinal, maxEnding);
//     }
//     return maxFinal;
// }
// let result = maxSumOfArray(arr);
// console.log(result);