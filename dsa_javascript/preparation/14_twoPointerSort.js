//  Given two sorted arrays, need to merge and form a single array using `Two Pointer Technique`.

function mergeArrays(arr1, arr2){
    let result = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Iterate through both arrays until one of them reaches its end
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++; // Move pointer for arr1
        } else {
            result.push(arr2[j]);
            j++; // Move pointer for arr2
        }
    }
    // Append remaining elements from arr1 (if any)
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    // Append remaining elements from arr2 (if any)
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}
const arr1 = [8, 9, 10, 11, 12];
const arr2 = [1, 6, 7, 13, 15];
const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 6, 7, 8, 9, 10, 11, 12, 13, 15]

// Time complexity O(n)

