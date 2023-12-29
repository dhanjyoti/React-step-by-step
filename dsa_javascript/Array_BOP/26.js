// ---------Sorting---------
// A Sorting Algorithm is used to re-arrange a given array or list of elements according 
// to a comparison operator on the elements. The comparison operator is used to decide
// the new order of elements in the respective data structure.

// ---------Bubble Sorting---------
// Bubble Sorting is the simplest sorting algorithm that works by repeatedly swapping the
// adjacent elements if they are in the wrong order. This algorithm is not suitable for
// large data sets as its average and worst-case time complexity is quite high.  
// Time Complexity-> O(n^2) -> Big `O` of n to the power 2.

// In Bubble Sort algorithm, 
// 1.  traverse from left and compare adjacent elements and the higher one is placed 
//     at right side. 
// 2.  In this way, the largest element is moved to the rightmost end at first. 
// 3.  This process is then continued to find the second largest and place it and so on 
//     until the data is sorted.

//  26. Implement the Bubble Sort algorithm.

function bubbleSort(array){
    // bubble sort
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                // swap
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
let array = [3, 6, 7, 8, 2, 1];
let sortedArray = bubbleSort(array);

console.log(sortedArray);