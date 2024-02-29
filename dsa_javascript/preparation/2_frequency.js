//  find the frequency of each element in an array

let arr = [3, 3, 8, 9, 1, 8, 3, 7, 6, 8, 1];

// function checkFrequency(arr){
//     let frequency = {};
//     for(let element of arr){
//         if(frequency[element]){
//             frequency[element] += 1;
//         } else {
//             frequency[element] = 1;
//         }
//     }
//     return frequency;
// }
// console.log(checkFrequency(arr))


// optimized
function checkFrequency(arr){
    let frequency = {};
    for(let i=0; i<arr.length; i++){
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    return frequency;
}
console.log(checkFrequency(arr));