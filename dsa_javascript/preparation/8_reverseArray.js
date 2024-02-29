// Reverse an array

let arr = [7, 8, 6, 10, 15, 18, 3, 2, 1];

function reverseArray(arr){
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(arr));
