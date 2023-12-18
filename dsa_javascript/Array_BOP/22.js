//  22. Find the maximum sum of a subarray (Kadane's algorithm).(Imp)

// function MaxSumOfSubArray(array){
//     let maxEnding = array[0];
//     let maxSoFar = array[0];

//     for(let i=1; i<array.length; i++){
//         maxEnding = Math.max(array[i], maxEnding + array[i]);
//         maxSoFar = Math.max(maxSoFar, maxEnding);
//     }
//     return maxSoFar;
// }

// let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let result = MaxSumOfSubArray(array);
// console.log(result);

function maxSumOfArray(array){
    let maxEnding = array[0];
    let maxFinal = array[0];

    for(let i=1; i<array.length; i++){
        maxEnding = Math.max(array[i], maxEnding + array[i]);
        maxFinal = Math.max(maxFinal, maxEnding);
    }
    return maxFinal;
}
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSumOfArray(array);
console.log(result);