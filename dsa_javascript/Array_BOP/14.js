//  14. Count the occurrences of a specific element in an array.

let array = [2, 4, 6, 7, 4, 8, 20, 4];
let occuranceValue = 4;

function occurance(arr, target){
    let count = 0;
    for(let i=0; i<=arr.length; i++){
        if(arr[i] == occuranceValue){
            count++;
        }
    }
    return count;
}
let result = occurance(array, occuranceValue);
console.log(`${occuranceValue} in array is: ${result}`);