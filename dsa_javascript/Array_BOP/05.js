//  5. Find the largest element in an array.

let arr = [1, 4, 6, 3];

let max = arr[0];
for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log(max);