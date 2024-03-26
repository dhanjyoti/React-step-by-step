//  18. Remove duplicates from a sorted array.(imp)

// let number = [1, 3, 3, 4, 5, 5, 5, 6, 8];

// function removeDuplicates(numbers){
//     let index = 1;
//     for(let i=0; i<numbers.length-1; i++){
//         if(numbers[i] !== numbers[i+1]){
//             numbers[index] = numbers[i+1]
//             index++;
//         }
//     }
//     return index;
// }
// let result = removeDuplicates(number);
// console.log(result);    // total unduplicate numbers works only in consecutive array

// let arr = [6, 34, 4, 6, 76, 4, 54];

// function removeDuplicateElement(arr){
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
// let result = removeDuplicateElement(arr);
// console.log(result);

let arr = [4, 3, 6, 8, 5, 5, 3];
let sortedArray = arr.sort((a, b) => a - b); // Sort numerically

let uniqueArray = [sortedArray[0]];

for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
        uniqueArray.push(sortedArray[i]);
    }
}

console.log("Original Array:", arr);
console.log("Array without duplicates:", uniqueArray);