// 48. Find the majority element (element that appears more than n/2 times).  

// Javascript program to find Majority
// element in an array
 
// Function to find Majority element in an array


// function findMajority(arr, n)
// {
//     let maxCount = 0;
//     let index = -1; // sentinels
     
//     for(let i = 0; i < n; i++) 
//     {
//         let count = 0;
//         for(let j = 0; j < n; j++) 
//         {
//             if (arr[i] == arr[j])
//                 count++;
//         }
 
//         // Update maxCount if count of
//         // current element is greater
//         if (count > maxCount) 
//         {
//             maxCount = count;
//             index = i;
//         }
//     }
 
//     // If maxCount is greater than n/2
//     // return the corresponding element
//     if (maxCount > n / 2)
//         console.log(arr[index]);
//     else
//         console.log("No Majority Element");
// }
 
// // Driver code
// let arr = [ 1, 1, 2, 1, 3, 5, 1 ];
// let n = arr.length;
 
// // Function calling
// findMajority(arr, n);


function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;
  
    // Step 1: Find the candidate for the majority element
    for (const num of arr) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else {
        if (candidate === num) {
          count++;
        } else {
          count--;
        }
      }
    }
  
    // Step 2: Verify if the candidate is the majority element
    count = 0;
    for (const num of arr) {
      if (num === candidate) {
        count++;
      }
    }
  
    if (count > arr.length / 2) {
      return candidate;
    } else {
      return null; // No majority element found
    }
  }
  
  // Example usage:
  const array = [2, 2, 3, 2, 4, 2, 2]; // In this array, 2 appears more than n/2 times
  const majorityElement = findMajorityElement(array);
  if (majorityElement !== null) {
    console.log(`The majority element is: ${majorityElement}`);
  } else {
    console.log("No majority element found.");
  }
  