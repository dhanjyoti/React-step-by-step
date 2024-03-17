// Selection Sort

let arr = [5, 7, 23, 6, 1, 66, 55];

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let smallest = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[smallest] > arr[j]){
                smallest = j;
            }
        }
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
let sortedArray = selectionSort(arr);
console.log(sortedArray)