//  Insertion Sort

let arr = [6, 34, 67, 8, 82, 26, 7];

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j = i;
        while(j>0 && arr[j]<arr[j-1]){
            // swap
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}
let result = insertionSort(arr);
console.log(result);