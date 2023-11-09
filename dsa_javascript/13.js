//  13. Print a pattern of numbers in a pyramid shape.

const height = 5;
for(let i=0; i<height; i++){
    for(let k=0; k<height-i; k++){
        process.stdout.write("_");
    }
    for(let j=0; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log(" ");
}