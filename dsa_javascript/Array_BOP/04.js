//  4. Calculate the average of elements in an array.

let arr = [2, 4, 7, 3];

let sum = 0;
for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}

let avg = sum/arr.length;
console.log(avg);