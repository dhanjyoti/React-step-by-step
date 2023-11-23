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
// console.log(result);    // total unduplicate numbers

let num = [1, 3, 3, 4, 5, 5, 5, 6, 8];

function removeDuplicates(numbers){
    let index = 1;
    for(let i=0; i<numbers.length-1; i++){
        if(numbers[i] !== numbers[i+1]){
            numbers[index] = numbers[i+1]
            index++;
        }
    }
    numbers.length = index;
    return numbers;
}
let result = removeDuplicates(num);
console.log(result); 