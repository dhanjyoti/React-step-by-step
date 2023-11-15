//  37. Write a function to calculate the LCM (Least Common Multiple) of two numbers.

function calculateLCM(num1, num2) {
    // Calculate GCD (Greatest Common Divisor) using Euclidean algorithm
    function calculateGCD(a, b) {
        if (b === 0) {
            return a;
        } else {
            return calculateGCD(b, a % b);
        }
    }
    
    // LCM formula: LCM(a, b) = (a * b) / GCD(a, b)
    return (num1 * num2) / calculateGCD(num1, num2);
}

// Example usage:
const num1 = 12;
const num2 = 15;
const lcm = calculateLCM(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);