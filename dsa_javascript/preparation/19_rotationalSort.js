//  Find the index of the element through binary search(rotational sorted array)

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        // If left half is sorted
        if (nums[left] <= nums[mid]) {
            // If target is within the range of left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        } else { // Right half is sorted
            // If target is within the range of right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }
    return -1; // Target not found
  }
  // Example usage:
// let arr = [6, 7, 8, 9, 1, 2, 3, 4, 5];
  const arr = [16, 17, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 2;
  const index = search(arr, target);
  console.log(`Index of ${target} is ${index}`);