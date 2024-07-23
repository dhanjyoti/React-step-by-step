// Bubble Sorting

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let array = [4, 6, 8, 3, 9, 2];
let sortedArray = bubbleSort(array);
console.log(sortedArray);

// Time complexity O(n^2)
// Space complexity 