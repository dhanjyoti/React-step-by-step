//  7. Count the number of even elements in an array.

let arr = [4, 5, 8, 9, 6, 2];

let count = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        ++count; 
    }
}
console.log(count);