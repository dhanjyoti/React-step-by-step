// ---------Insertion Sort----------
// Insertion sort is a simple sorting algorithm that works similar to the 
// way you sort playing cards in your hands. The array is virtually split 
// into a sorted and an unsorted part. Values from the unsorted part are 
// picked and placed at the correct position in the sorted part.
// Time Complexity-> O(n^2)-> Big `O` of n to the power 2.

// To sort an array of size N in ascending order iterate over the array 
// and compare the current element (key) to its predecessor, if the key 
// element is smaller than its predecessor, compare it to the elements 
// before. Move the greater elements one position up to make space for 
// the swapped element.

//  28. Implement the Insertion Sort algorithm.

function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j]<arr[j-1]){
            //swap
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}
let array = [3, 5, 8, 4, 2];
let result = insertionSort(array);
console.log(result);    