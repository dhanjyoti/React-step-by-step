//  28. Implement the Insertion Sort algorithm.

// function insertionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let current = arr[i];
//         let j = i-1;
//         while(j >= 0 && current < arr[j]){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;
//     }
//     return arr;
// }
// let array = [7, 8, 3, 1, 2];
// let result = insertionSort(array);
// console.log(result); 


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