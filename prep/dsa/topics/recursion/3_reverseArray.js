// Reverse an array using Recursion

let arr = [8, 4, 6, 3, 7, 5];
let temp;

function customReverse(data, start, end){
    if(start <= end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data, start+1, end-1)
    }
    return data;
}
console.log(customReverse(arr, 0, arr.length-1));