//  12. Print a pattern of stars in the shape of a right-angled triangle.

// const height = 5;
// for(let i=0; i<=height; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log(" ");
// }

// const height = 5;
// let i = 0;
// while(i <= height){
//     i++;
//     for(let j=1; j<i; j++){
//         process.stdout.write("* ");
//     }
//     console.log(" ");
// }

// let height = 5;
// let i = 0;
// do{
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     i++;
//     console.log(" ");
// } while (i < height);

// function drawRightAngledTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//       // Print spaces
//       for (let j = 1; j <= height - i; j++) {
//         process.stdout.write(" ");
//       }
  
//       // Print asterisks
//       for (let k = 1; k <= i; k++) {
//         process.stdout.write("*");
//       }
  
//       // Move to the next line
//       console.log();
//     }
//   }
  
//   // Example usage with a height of 5
//   drawRightAngledTriangle(5);

  
// ### opposite ###

let n = 5;
for(let i=0; i<=n; i++){
    for(let j=0; j<n-i; j++){
        process.stdout.write(" ");
    }
    for(let k=0; k<i; k++){
        process.stdout.write("*");
    }
    console.log();
}