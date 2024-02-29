// Given an array A[] of N elements. The task is to count number of even and odd elements in the array.

// https://www.geeksforgeeks.org/problems/count-odd-even/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab

let numberArray = [3, 5, 7, 9, 4, 6];

function countOddEven(arr) {
    let arrayLength = arr.length;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }

    // Returning an array containing odd count and even count
    return [oddCount, evenCount];
}

let result = countOddEven(numberArray);
console.log(result);
