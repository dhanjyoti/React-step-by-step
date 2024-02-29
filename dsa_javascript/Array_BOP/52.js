//  52. Frequency of elements in an array.

let arr = [4, 6, 2, 4, 7,9, 4, 2, 6,2, 5, 6, 2];
function frequencyOfElements(arr){
    let frequency = {};
    for(let ele of arr){
        frequency[ele] = (frequency[ele] || 0) + 1;
    }
    return frequency;
}
let result = frequencyOfElements(arr);
console.log(result)