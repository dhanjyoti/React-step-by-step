//  Given a number `n`, find the first `n` elements of the Fibonacci Sequence.

function fibonacci(n){
    const fib = [0, 1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
console.log(fibonacci(3))
console.log(fibonacci(10))

// O(n)