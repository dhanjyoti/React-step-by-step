// const a = parseInt(prompt("Enter the numbers 1"));
// const b = parseInt(prompt("Enter the numbers 2"));
// const type = prompt("Enter operation you want to perform Ex(subtraction,addition,multiplication,division)"
// ).toUpperCase();

// if(type === "A"){
//     function addition(a, b){
//         return a + b;
//     }
//     const add = addition(a, b);
//     document.write(add);
// } else if(type === "S"){
//     function substraction(a, b){
//         return a - b;
//     }
//     const sub = substraction(a, b);
//     document.write(sub);
// } else if(type === "M"){
//     function multiplication(a, b){
//         return a * b;
//     }
//     const multi = multiplication(a, b);
//     document.write(multi);
// } else if(type === "D"){
//     function division(a, b){
//         return a / b;
//     }
//     const div = division(a, b);
//     document.write(div);
// } else if(type === "R"){
//     function reminder(a, b){
//         return a % b;
//     }
//     const rem = reminder(a, b);
//     document.write(rem);
// } else {
//     document.write("not a valid input");
// }

// 12345
// 1234
// 123
// 12
// 1

// for(let i=5; i>=1; i--){
//     let string = "";
    
//     for(let j=1; j<=i; j++){
//       string += j;
//     }
//     console.log(string);
// }

//     *           spaces - 4   stars - 1
//    ***          spaces - 3   stars - 3
//   *****         spaces - 2   stars - 5
//  *******        spaces - 1   stars - 7
// *********       spaces - 0   stars - 9

// Define the number of rows for the pattern
const numberOfRows = 5;

// Outer loop for each row
for (let i = 1; i <= numberOfRows; i++) {
  let spaces = ' '.repeat(numberOfRows - i); // Add spaces before the stars
  let stars = '*'.repeat(2 * i - 1); // Add odd number of stars for each row

  console.log(spaces + stars);
}



      