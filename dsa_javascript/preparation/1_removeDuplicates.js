// remove duplicates

let arr = [3, 2, 8, 3, 9, 1, 2, 1, 5, 6];
let sortedArray = arr.sort((a,b)=> a-b);
let result = [];
for(let i=0; i<sortedArray.length; i++){
    if(sortedArray[i] != sortedArray[i+1]){
        result.push(sortedArray[i]);
    }
}
console.log(result);

// let arr = [4, 6, 2, 4, 7, 9, 4, 2, 6, 2, 5, 6, 2]; 
// for(let i=0;i<arr.length; i++){
//     arr.splice(arr[i], 1);
// }
// console.log(arr);