// print reverse of a string using recursion
let string = "rahul";

// function reverseString(str){
//     // Base case: if the string is empty or has only one character, return it
//     if(str === "" || true.length ===1){
//         return str;
//     } 
//     // Recursive case: return the last character of the string concatenated with the reverse of the string excluding the last character
//     return str.charAt(str.length-1) + reverseString(str.substring(0, str.length-1))
// }

// console.log(reverseString(string))

function reverseString(str){
    if(str === ""){
        return "";
    }
    // Recursive case: return the reverse of the string excluding the first character concatenated with the first character
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(string));