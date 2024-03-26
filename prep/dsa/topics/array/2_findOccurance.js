//  Count the occurances of a specific element in an array.

let arr = [7, 8, 6, 10, 1, 2, 1, 2, 2, 3, 10, 15, 2, 3, 2, 1];
let occuredValue = 1;

function occurance(arr, target){
    let count = 0;
    for(let i=0; i<=arr.length; i++){
        if(arr[i] == target){
            count++;
        }
    }
    return count;
}
let result = occurance(arr, occuredValue);
console.log(`${occuredValue} in array is: ${result}`);
