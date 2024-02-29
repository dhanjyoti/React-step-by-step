//  Insertion Sort

let arr = [5, 7, 9, 2, 7, 33, 54, 1];

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j] < arr[j-1]){
            //  Swap
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