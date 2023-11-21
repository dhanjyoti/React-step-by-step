//  16. Reverse an array in-place.

let array = [3, 5, 7, 9, 6, 11];

function reverseArrayInPlace(arr){
    let x = 0;
    let y = arr.length - 1;

    while(x < y){
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;

        x++;
        y--;
    }
    return arr;
}
console.log("The array: "+ array);
console.log("Reversed array is: ", reverseArrayInPlace(array));