//  1. Print the characters of a string one by one.

let myStr = "Hello Dhanjyoti";

// for(let i=0; i<myStr.length; i++){
//     process.stdout.write(myStr[i] + " ");
// }

for(let char of myStr){
    process.stdout.write(char + " ");
}