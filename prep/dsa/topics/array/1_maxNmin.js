//  Find the maximum and minimum element from an array.

let arr = [7, 8, 6, 10, 15, 18, 3, 2, 1];

let maximum = arr[0];
let minimum = arr[0];
for(let i=0; i<arr.length; i++){
    if(maximum < arr[i]){
        maximum = arr[i];
    } else {
        minimum = arr[i];
    }
}
console.log(`Maximum: ${maximum} & Minimum: ${minimum}`);