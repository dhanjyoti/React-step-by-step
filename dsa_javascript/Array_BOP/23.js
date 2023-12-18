//  23. Find the subarray with the largest product.

function subarrayMaxProduct(nums) {
    let n = nums.length;
  
    let leftProduct = 1;
    let rightProduct = 1; // Corrected the variable name
    let ans = Number.NEGATIVE_INFINITY; // Initialize ans with a very small value
  
    for (let i = 0; i < n; i++) {
      leftProduct = leftProduct === 0 ? 1 : leftProduct;
      rightProduct = rightProduct === 0 ? 1 : rightProduct;
  
      leftProduct *= nums[i];
      rightProduct *= nums[n - 1 - i];
  
      ans = Math.max(ans, Math.max(leftProduct, rightProduct));
    }
    return ans;
} 
  let array = [2, 3, -2, -5, 6, -1, 4];
  let result = subarrayMaxProduct(array);
  console.log(result);