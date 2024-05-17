// print the sum of all the properties

const array = [
    {   
    "count": 3
    }, 
    {
    "count": 5
    },
    {
    "count": 7
    } 
]    

// let sum = 0;
// for(let i of array){
//     for(let key in i){
//         sum += i[key];
//     }
// }
// console.log(sum);

// let sum = 0;
// for(let i of array){
//     sum += i.count;
// }
// console.log(sum);

const sum = array.reduce((acc, i)=> acc + i.count, 0);
console.log(sum);