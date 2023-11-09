let a = prompt("Enter value of a");
let b = prompt("Enter value of b");
let c = prompt("Enter value of c");

console.log(typeof a);
const Average = function xyz(){
    return (parseInt(a) + parseInt(b) + parseInt(c))/3;
};
console.log(`Average value of ${a}, ${b}, ${c}, is ${Average()}.`);