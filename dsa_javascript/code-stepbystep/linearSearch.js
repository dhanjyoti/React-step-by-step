let data = [3, 12, 5, 6, 53, 12, 43, 96, 23];

// For only one element position
// let item = 12;
// let index = undefined;

// for(i=0; i<data.length-1; i++){
//     if(data[i] === item){
//         index = i;
//     }
// }
// console.log(index)


// Element positions placed in an array
// let item = 12;
// let indeces = [];

// for(let i=0; i<data.length; i++){
//     if(data[i] === item){
//         indeces.push(i);
//     }
// }
// console.log(indeces)


// Elements positions placed in an object
// let item = 12;
// let result = {indeces: []};

// for(let i=0; i<data.length; i++){
//     if(data[i] === item){
//         result.indeces.push(i);
//     }
// }
// console.log(result)

let item = 12;
let result = {};
let count = 1;
for(let i=0; i<data.length; i++){
    if(data[i] === item){
        result[`index_position${count}`] = i;
        count++;
    }
}
console.log(result)