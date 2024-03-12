//  Find the maximum sum of all the possibe contigious 
//  sub arrays of a given array

let arr = [-1, 3, 4, -5, 6, 8, 10, -11];

// let sub = []
// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     for(let j=i; j<arr.length; j++){
//         count += arr[j];
//         // console.log(count)
//         sub.push(count);
//     }
// }
// // console.log(sub)
// let sorted = sub.sort((a, b)=> a-b);
// let maximumSum = sorted[sorted.length - 1];
// console.log(maximumSum)

function maxSubArray(arr){
    let maxSum = arr[0];
    for(let i=0; i<arr.length; i++){
        let currentSum = 0;
        for(let j=i; j<arr.length; j++){
            currentSum += arr[j];
            if(currentSum > maxSum){
                maxSum = currentSum
            }
        }
    }
    return maxSum;
}
console.log(maxSubArray(arr))