// Given an integer n, find the absolute difference between 
// sum of the squares of first n natural numbers and square 
// of sum of first n natural numbers.

// Examples : 
 

// Input : n = 3
// Output : 22
// Sum of first three numbers is 3 + 2 + 1 = 6
// Square of the sum =  36
// Sum of squares of first three is 9 + 4 + 1 = 14
// Absolute difference = 36 - 14 = 22

// Input : n = 10
// Output : 2640



function absoluteDifference(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += i;
    }
    let sumOfFirstThreeNumber = sum;
    let squareOfSum = sumOfFirstThreeNumber * sumOfFirstThreeNumber;

    let square = 0;
    let sumSquare
    for(let j=1; j<=num; j++){
        sumSquare = square += j*j;
    }
    return squareOfSum - sumSquare;
}
let num = 10;
let result = absoluteDifference(num);
console.log(result);