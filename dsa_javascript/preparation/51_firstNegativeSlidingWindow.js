// Given an array and a positive integer k, find the first negative integer for each and every window(contiguous subarray) of size k.

// Example:
// Input:
// 2
// 5
// -8 2 3 -6 10
// 2
// 8
// 12 -1 -7 8 -15 30 16 28
// 3

// Output:
// -8 0 -6 -6
// -1 -1 -7 -15 -15 0 

function negativeNumber(arr, k) {
    let i = 0,
      j = 0,
      list = [],
      ans = [];
    while (j < arr.length) {
      if (arr[j] < 0) list.push(arr[j]);
      if (j - i + 1 < k) j++;
      else if (j - i + 1 === k) {
        ans.push(list[0] || 0);
        // If the first negative number is at the leftmost position, remove it from the list
        if (arr[i] === list[0]) list.shift();
        j++;
        i++;
      }
    }
    return ans;
  }
  
  console.log(negativeNumber([5, -2, 3, 4, -5], 2));