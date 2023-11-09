//  24. Calculate and print the average of elements in an array.


let arr = [2, 4, 6, 8, 9, 7, 5, 3];

let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
let average = sum / arr.length;
console.log(average);