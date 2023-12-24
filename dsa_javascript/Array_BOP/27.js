// ---------Selection Sort---------
// Selection Sort is a simple and efficient sorting algorithm that works by
// repeatedly selecting the smallest(or largest) element form the unsorted 
// portion of the list and moving it to the sorted portion of the list.

// The algorithm repeatedly selects the smallest (or largest) element from 
// the unsorted portion of the list and swaps it with the first element of 
// the unsorted part. This process is repeated for the remaining unsorted 
// portion until the entire list is sorted. 

// Time Complexity-> O(n^2) -> Big `O` of n to the power 2

//  27. Implement the Selection Sort algorithm.

let arr = [3, 4, 6, 9, 2];
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
console.log(sortedArray);