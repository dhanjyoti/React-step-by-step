//  20. Insert an element at a specific position in an array.

let arr = [1, 3, 5, 7, 9, 12, 24];

// let elementToInsert = 8;
// let positionToInsert = 3;

// // Insert the element at the specified position
// arr.splice(positionToInsert, 0, elementToInsert);

// console.log(arr);

let insert = 34;
let position = 4;
arr.splice(position, 0, insert);
console.log(arr);