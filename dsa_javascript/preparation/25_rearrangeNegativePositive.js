// Re-arrange negative to left and positive to right

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// output: -12, -13, -5, -7, -3, -6, 11, 6, 5

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
function arrangeNegativeAndPositive(arr){
    let left = [];
    let right = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return [...left, ...right];
}
let result = arrangeNegativeAndPositive(arr);
console.log(result);