//  Reverse an array in-place.

let array = [7, 8, 6, 10, 15, 18, 3, 2, 1];

// function reverseArrayInPlace(arr){
//     let x = 0;
//     let y = arr.length - 1;

//     while(x < y){
//         let temp = arr[x];
//         arr[x] = arr[y];
//         arr[y] = temp;

//         x++;
//         y--;
//     }
//     return arr;
// }
// console.log("The array: " + array);
// console.log("Reversed array is", reverseArrayInPlace(array));


//  Reverse an array in new array.

function reverseArray(arr){
    let newArray = [];
    for(let i=arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArray(array));