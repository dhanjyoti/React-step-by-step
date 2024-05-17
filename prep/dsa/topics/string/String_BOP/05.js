//  5. Check if a string is empty.

// const string = "";
// if(string === ''){
//     console.log("String is empty");
// } else {
//     console.log("String is not empty");
// }

let string = ["hello", "in", "", ""]

for(let i=0; i<string.length; i++){
    if(string[i] === ''){
        console.log("Stirng is empty");
    } else {
        console.log("Stirng is not empty");
    }
}