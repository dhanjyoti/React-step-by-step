// Make two arrays left of `0` and right of`0` in an array and remove the `0`.

let arr = [1, 5, 3, 0, 2, 7];

// let index = arr.indexOf(0);
// let left = arr.splice(0, index);
// let right = arr.splice(1);
// console.log(left, right);


function rearrange(arr){
    let left = [];
    let right = [];
    let isZero = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            isZero = true;
            continue;
        } 
        if(!isZero){
            left.push(arr[i])
        }
         else {
            right.push(arr[i]);
        }
    }
    return [left, right];
}
let result = rearrange(arr);
console.log(result);