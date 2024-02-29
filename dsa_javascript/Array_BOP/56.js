//  Quick Sort

let arr = [4, 7, 9, 3, 6, 2, 6, 2];

function quickSort(arr){
    if(arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
let result = quickSort(arr);
console.log(result)


// function swap(array, firstIndex, secondIndex) {
//   let temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }
// function Pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
//   let swapIndex = pivotIndex;
//   for (let i = pivotIndex + 1; i <= endIndex; i++) {
//     if (array[i] < array[pivotIndex]) {
//       swapIndex++;
//       swap(array, swapIndex, i);
//     }
//   }
//   swap(array, pivotIndex, swapIndex);
//   return swapIndex;
// }
// function QuickSort(array, left = 0, right = array.length - 1) {
//   if (left < right) {
//     let pivotIndex = Pivot(array, left, right);
//     QuickSort(array, left, pivotIndex - 1);
//     QuickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }
// let myArr = [4, 6, 1, 7, 3, 2, 5];
// const sort = QuickSort(myArr);
// console.log(sort);