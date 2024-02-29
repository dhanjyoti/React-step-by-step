// Find the kth largest element from a given array

let arr = [3, 6, 7, 8, 2, 9];
let index = 3;

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
let kthLargest = arr[arr.length - index];
console.log(kthLargest)