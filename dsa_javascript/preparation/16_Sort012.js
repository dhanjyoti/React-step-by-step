//  Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// function sort012(arr){
//     let count = [0, 0, 0];  //  Count the occurrences of 0s, 1s and 2s

//     //  Count the occurrences of each element
//     for(let num of arr){
//         count[num]++;
//     }
//     let i=0;
//     //  Place 0s
//     while(count[0] > 0){
//         arr[i++] = 0;
//         count[0]--;
//     }
//     //  Place 1s
//     while(count[1] > 0){
//         arr[i++] = 1;
//         count[1]--;
//     }
//     //  Place 2s
//     while(count[2] > 0){
//         arr[i++] = 2;
//         count[2]--;
//     }
//     return arr;
// }
// console.log(sort012(arr));

//  --- O(n) Time Complexity(Two Pointer technique) ---

function sort012(arr) {
  let low = 0; // Pointer for 0s
  let mid = 0; // Pointer for 1s
  let high = arr.length - 1; // Pointer for 2s

  while (mid <= high) {
    if (arr[mid] === 0) {
      //  If current element is 0, swap it with element at low pointer
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      //  If current element is 1, no need to swap, just move mid pointer
      mid++;
    } else {
      //  If current element is 2, swap it with element at high pointer
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
let arr = [0, 0, 2, 2, 1, 2, 1, 0];
console.log(sort012(arr));
