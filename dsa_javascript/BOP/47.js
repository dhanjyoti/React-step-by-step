// 47. Determine the largest of three numbers entered by the user.
 
let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
let c = prompt("Enter the value of c");

if(a>b && a>c){
    console.log(`${a} is greatest`);
} else if(b>a && b>c){
    console.log(`${b} is greatest`);
} else {
    console.log(`${c} is greatest`);
}