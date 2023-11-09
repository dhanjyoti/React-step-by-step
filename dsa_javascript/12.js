//  11. Print the numbers from 1 to 10.


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

let height = 5;
let i = 0;
do{
    for(let j=0; j<=i; j++){
        process.stdout.write("* ");
    }
    i++;
    console.log(" ");
} while (i < height);