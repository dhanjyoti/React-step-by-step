//  3. Find the product of all elements in an array.

let arr = [2, 4, 7, 3];

let multi = 1;
for(let i=0; i<arr.length; i++){
    multi = multi * arr[i];
}
console.log(multi);