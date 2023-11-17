//  20. Print the multiplication table of a number entered by the user.

const number = 10;

let temp = 1;
for(let i=1; i<=number; i++){
    temp = number * i;
    console.log(`${number} X ${i} = ${temp}`);
}