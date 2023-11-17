//  14. Calculate and print the Fibonacci series up to a given number.

function generateFibonacciSeries(number){
    let arr = [0, 1];

    while(arr[arr.length - 1] <= number){
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    console.log(arr);
    arr.pop();

    return arr;
}

const uptoNumber = 10;
const fibonacci = generateFibonacciSeries(uptoNumber);

console.log("Fibonacci series up to " + uptoNumber + ":");
console.log(fibonacci.join(", "));
