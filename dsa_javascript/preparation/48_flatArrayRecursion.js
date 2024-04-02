// flat an array using recursion(make it in one)

let arr = [1,2,3,[4,5,[6,7]]];
// console.log(arr.flat(2))
// console.log(arr.flat(Infinity))


// function flatten(array) {
//     let flatArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             flatArray.push(...flatten(array[i]));
//         } else {
//             flatArray.push(array[i]);
//         }
//     }
//     return flatArray;
// }
// console.log(flatten(arr))


function flatten(arr){
    let flatArray = [];
    for(let i=0; i<arr.length; i++){
        Array.isArray(arr[i])
        ?    flatArray = flatArray.concat(flatten(arr[i]))
        :    flatArray.push(arr[i]);
    }
    return flatArray;
}
console.log(flatten(arr));