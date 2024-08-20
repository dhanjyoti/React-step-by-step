//  function curring using bind
let multiplyB = function(x, y){
    return x*y;
}

let multiplyByTwo = multiplyB.bind(this, 2);
console.log(multiplyByTwo(5)) 

let multiplyByThree = multiplyB.bind(this, 3, 4);
console.log(multiplyByThree(5)) 



//  function curring with closures
let multiplyC = function(x){
    return function(y){
        return x*y
    }
}

let multiplyCbytwo = multiplyC(2);
console.log(multiplyCbytwo(3))

let multiplyCbyfour = multiplyC(4, 4);
console.log(multiplyCbyfour(3))