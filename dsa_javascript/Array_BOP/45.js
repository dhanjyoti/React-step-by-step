// 45. Generate a random permutation of an array.

function generatePermutations(array) {
    const result = [];
  
    function permute(arr, start = 0) {
      if (start === arr.length - 1) {
        result.push([...arr]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap elements
        permute(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]]; // Undo the swap
      }
    }
  
    permute(array);
  
    return result;
  }
  
  let array = [2, 3, 4];
  let permutations = generatePermutations(array);
  
  console.log(permutations);
  
  console.log(permutations);
  
  