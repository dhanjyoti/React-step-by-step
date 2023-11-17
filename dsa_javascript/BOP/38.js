//  38. Write a function to find the GCD (Greatest Common Divisor) of two numbers.

function calculateGCD(num1, num2) {
    while (num2 !== 0) {
      let temp = num2; 
      num2 = num1 % num2; 
      num1 = temp; 
  
    }
    return num1;
  }
  
  // Example usage:
  const number1 = 48;
  const number2 = 18;
  const gcd = calculateGCD(number1, number2);
  console.log(`The GCD of ${number1} and ${number2} is ${gcd}`);