//  19. Remove a specific element from an array.

// let arr = [1, 3, 5, 7, 9, 12, 24];

// let target = 9;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == target){
//         arr.splice(i, 1);
//         break;
//     }
// }
// console.log(arr);

let array = [3, 5, 7, 9, 6, 2];
let specificElement = 7;

let newArray = [];
for(let i=0; i<array.length; i++){
    if(array[i] == specificElement){
        continue;
    }
    newArray.push(array[i]);
}
console.log(newArray)
