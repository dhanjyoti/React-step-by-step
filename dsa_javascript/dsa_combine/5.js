// Find square root of number upto given precision using binary search

function squareRoot(number, precision) {
    let low = 0;
    let high = number;
    let ans = 0;

    while (low <= high) {
        let mid = (low + high) / 2;
        let square = mid * mid;

        // If mid is the square root
        if (square === number) {
            ans = mid;
            break;
        }

        // If square is less than number, update low
        if (square < number) {
            low = mid + precision;
            ans = mid;
        } else { // If square is greater than number, update high
            high = mid - precision;
        }
    }
    return ans.toFixed(precision);
}

// Example usage:
let number = 120;
let precision = 6;
console.log("Square root of", number, "up to", precision, "decimal places is:", squareRoot(number, precision));
