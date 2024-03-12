/* 
You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.
 

Example 1:

Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
Example 2:

Input: nums = [2,-5,1,-4,3,-2]
Output: 8
Explanation: The subarray [-5,1,-4] has absolute sum = abs(-5+1-4) = abs(-8) = 8.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

let arr = [2,-5,1,-4,3,-2];

function kadanasAlgorithm(arr){
    let sum = 0;
    let maxi = arr[0];
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        maxi = Math.max(maxi, sum);
        if(sum<0){
            sum = 0;
        }
    }
    let sum1 = 0;
    let maxi1 = arr[0];
    for(let i=0; i<arr.length; i++){
        sum1 += arr[i];
        maxi1 = Math.min(maxi1, sum1);
        if(sum1>0){
            sum1 = 0;
        }
    }
    return Math.abs(maxi1)>maxi ? Math.abs(maxi1) : maxi;
}
console.log(kadanasAlgorithm(arr))