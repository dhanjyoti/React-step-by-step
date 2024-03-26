//  Remove duplicates from an array.(imp)

let array = [6, 34, 4, 6, 76, 4, 54];

let arr = array.sort((a, b)=> a - b);

// function removeDuplicates(arr){
//     let index = 0;
//     for(let i=0; i<arr.length; i++){
//         let isDuplicate = false;

//         for(let j=0; j<index; j++){
//             if(arr[i] === arr[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             arr[index++] = arr[i];
//         }
//     }
//     arr.length = index;
//     return arr;
// }
// let result = removeDuplicates(arr);
// console.log(result);

let uniqueArray = [arr[0]];
for(let i=1; i<arr.length; i++){
    if(arr[i] !== arr[i-1]){
        uniqueArray.push(arr[i]);
    }
}
console.log(array);
console.log(uniqueArray);