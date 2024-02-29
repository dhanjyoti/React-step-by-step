/**
 * Given an array [“123f”, “1dsa12”, “1212ds”, “65fd”, “sadfa”, “asdasd”]
 * Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 * Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
**/



// const sumArr = (arr) => {
//     let sum = 0;
//     for(let str of arr){
//         let wantedStr = str.replace(/[^0-9]/g, "");
        
//         if(wantedStr > 0){
//             sum += parseInt(wantedStr);
//         }
//     }
//     return sum;
// };



// console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
// console.log(sumArr(["asdasd"])); // 0
// console.log(sumArr(["asdasd12"])); // 12
// console.log(sumArr(["12"])); // 12



/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



// const chunk = (arr, size) => {
//     const chunks = [];
//     let index = 0;
//     while(index < arr.length){
//         chunks.push(arr.slice(index, index + size));
//         index += size;
//     }
//     return chunks;
// };



// console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
// console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
// console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
// console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
// console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
// console.log(chunk([2, 2], 3)); // [[2, 2]]




/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

// var obj = {
//     a: {
//         b: {
//             c: 12,
//             j: false
//         },
//         k: null
//     }
// };

// const findPath = (object, path) => {
//     const keys = path.split('.');
    
//     let current = object;
//     for(let key of keys){
//         if(current && typeof current === 'object' && key in current){
//             current = current[key];
//         } else {
//             return undefined;
//         }
//     }
//     return current;
// };


// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null