// let word = "Apple";

// const reverseString = (word)=> word.split("").reverse().join('')

// console.log(reverseString(word))

// Palindromes
let word = "cddc";

function palindrome(word){
    let start = 0;
    let end = word.length - 1;

    while(start < end){
        if(word[start] !== word[end]){
            return "not palindrome";
        }
        start++;
        end--;
    }
    return "palindrome";
}
console.log(palindrome(word))