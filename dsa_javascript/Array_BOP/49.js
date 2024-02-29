// 49. Find the elements that appear more than n/3 times in an array.  


function findElementsAppearingMoreThanNOver3Times(arr) {
    let candidate1 = null;
    let count1 = 0;
    let candidate2 = null;
    let count2 = 0;

    // Step 1: Find candidates for potential elements appearing more than n/3 times
    for (const num of arr) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify the candidates and count their occurrences
    count1 = 0;
    count2 = 0;
    for (const num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const n = arr.length;

    // Check if candidates appear more than n/3 times
    if (count1 > n / 3) {
        result.push(candidate1);
    }
    if (count2 > n / 3) {
        result.push(candidate2);
    }

    return result;
}

// Example usage:
const array = [3, 3, 3, 5, 4, 4, 4, 5, 5, 5]; // In this array, 3 and 4 appear more than n/3 times
const elementsAppearingMoreThanNOver3Times = findElementsAppearingMoreThanNOver3Times(array);
console.log("Elements appearing more than n/3 times:", elementsAppearingMoreThanNOver3Times);

