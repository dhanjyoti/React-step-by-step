//      47. Find the kth most frequent element in an array. 

function findKthMostFrequentElement(arr, k) {
    // Step 1: Create frequency object
    const frequency = {};
    arr.forEach((element) => {
      frequency[element] = (frequency[element] || 0) + 1;
    });
  
    // Step 2: Convert frequency object to array of key-value pairs
    const frequencyArray = Object.entries(frequency);
  
    // Step 3: Sort the array by frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);
  
    // Step 4: Return the kth most frequent element
    return frequencyArray[k - 1][0]; // kth most frequent element (0-indexed)
  }
  
  // Example usage:
  const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const k = 2;
  const kthMostFrequent = findKthMostFrequentElement(array, k);
  console.log(`The ${k}th most frequent element is: ${kthMostFrequent}`);
  