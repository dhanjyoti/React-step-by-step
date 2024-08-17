let arr = [5, 7, 34, 23, 12, 43, 96, 121];

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}


console.log(insertionSort(arr))

// Time Complexity = O(n^2)
// Space Complexity = O(1)

