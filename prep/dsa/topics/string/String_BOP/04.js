//  4. Reverse a string.

let str = "Hello, Dhanjyoti";

// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// let result = reverseString(str);
// console.log(result);


function reverseString(str){
    let reversed = "";
    for(const c of str){
        reversed = c + reversed;
        // console.log(reversed)
    }
    return reversed;
}
let result = reverseString(str);
console.log(result)


// function reverseString(str){
//     return Array.from(str).reduce((reversed, c)=> c + reversed, "");
// }
// let result = reverseString(str);
// console.log(result)