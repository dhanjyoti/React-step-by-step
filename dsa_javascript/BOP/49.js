//  49. Determine if a given number is even or odd, without using the modulo operator.

function isEvenOrOdd(number) {
    // Use bitwise AND operator to check the least significant bit
    if ((number & 1) === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
console.log(isEvenOrOdd(7)); // Output: Odd
console.log(isEvenOrOdd(12)); // Output: Even