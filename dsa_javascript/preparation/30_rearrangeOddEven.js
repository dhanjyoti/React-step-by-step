// Bring even first and odds in last in the array

let arr = [4, 5, 2, 8, 7, 6, 9];
let even = [];
let odd = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}
console.log(...even, ...odd);