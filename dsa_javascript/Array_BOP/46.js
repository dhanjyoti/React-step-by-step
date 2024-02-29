// 46. Find the most frequent element in an array.                            


let array = [4, 6, 2, 4, 6, 2, 4];

function frequeny(arr) {
  let frq = {};
  let mostFrequentElement;
  let maxFrequerncy = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    frq[element] = (frq[element] || 0) + 1;

    if (frq[element] > maxFrequerncy) {
      maxFrequerncy = frq[element];
      mostFrequentElement = element;
    }
  }
  return mostFrequentElement;
}

let result = frequeny(array);

console.log(result);