//  6. Find the smallest element in an array.

let arr = [1, 4, 6, 3];

let min = arr[0];
for(let i=0; i<arr.length; i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log(min);