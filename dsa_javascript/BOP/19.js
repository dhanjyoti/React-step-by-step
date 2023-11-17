//  19. Print a pattern of numbers in a diamond shape.

let number = 5;

for(let i=0; i<number; i++){
    for(let j=0; j<number-i-1; j++){
        process.stdout.write(" ");
    }
    for(let j=0; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log(" ");
}
for(let i=0; i<number-1; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write(" ");
    }
    for(let j=0; j<number-i-1; j++){
        process.stdout.write("* ");
    }
    console.log(" ");
}