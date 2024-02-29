// •⁠  ⁠Given an integer array nums and an integer k, return the kth largest element.
// Condition : You are not allowed to use any predefined functions 
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5


// function partition(nums, low, high) {
//     const pivot = nums[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (nums[j] <= pivot) {
//             i++;
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//     }

//     [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
//     return i + 1;
// }

// function quicksort(nums, low, high) {
//     if (low < high) {
//         const pi = partition(nums, low, high);
//         quicksort(nums, low, pi - 1);
//         quicksort(nums, pi + 1, high);
//     }
// }

// function findKthLargest(nums, k) {
//     const n = nums.length;
//     quicksort(nums, 0, n - 1);
//     return nums[n - k];
// }

// const nums = [3, 2, 1, 5, 6, 4];
// const k = 2;
// console.log(findKthLargest(nums, k)); // Output: 5


// function findKthSmallestOrLargest(arr, num) {
//     arr.sort(function(a, b) { return a - b});
//     console.log(arr)
//     console.log("kth smallest", arr[num- 1]) //kth smallest
//     console.log("kth largest", arr[arr.length-num]) //kth smallest
  
//   };
//   console.log(findKthSmallestOrLargest([2,1,4,3,6,5,7], 3));