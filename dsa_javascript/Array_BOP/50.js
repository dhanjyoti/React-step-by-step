// 50. Find the second largest element in an array.  
    
// function secondLargest(arr){
//     if(arr.length < 2){
//         return "Array should have atleast two elements.";
//     }   
//     let first = arr[0];
//     let second = -Infinity;
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         } else if(arr[i] > second && arr[i] !== first){
//             second = arr[i];
//         }
//     }
//     if(second ===-Infinity){
//         return "there is no second-largest element.";
//     }
//     return second;
// }   
// let arr = [6, 36, 4, 76, 54];
// let result = secondLargest(arr);
// console.log("the second largest element is", result);


// function findSecondLargest(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
//     return secondLargest;
//   }
  
//   const array = [5, 2, 10, 8, 3];
  
//   const secondLargest = findSecondLargest(array);
//   console.log("Second largest element:", secondLargest);
  
  
//  The condition arr[i] > secondLargest && arr[i] !== largest is used to update 
//   the secondLargest variable when we encounter an element in the array that is greater 
//   than the current second largest element (secondLargest) and is not equal to 
//   the largest element (largest).
  
  // Let's break down this condition:
  
// arr[i] > secondLargest: This part checks if the current element arr[i] is greater 
//   than the current secondLargest value. If it is, then the current element becomes the 
//   new second largest.
// arr[i] !== largest: This part ensures that the current element is not equal to the 
//   largest element. We include this condition to avoid situations where the largest 
//   element is also considered as the second largest when it appears multiple times in 
//   the array.
  
  // Combining these conditions ensures that we update secondLargest only when we find 
//   an element that is greater than the current second largest but is not the largest 
//   element itself.
  
// function findSecondLargest(arr) {
//     // Sort the array in descending order
//     arr.sort(function(a, b) {
//         return b - a;
//     });

//     // Return the second element
//     return arr[1];
// }

// // Example usage:
// const array = [5, 2, 10, 8, 3];
// const secondLargest = findSecondLargest(array);
// console.log("Second largest element:", secondLargest);  // not recommended


function secondLargest(arr){
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a,b)=>b-a);
  return arr[1]
}
let arr = [4, 7, 5, 8, 7, 2];
console.log(secondLargest(arr))