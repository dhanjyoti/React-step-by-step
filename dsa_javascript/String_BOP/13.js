//  13. Remove all occurrences of a specific character from a string.

let originalWord = "how are you boys?";
let newWord = 'o';
let ans = originalWord.split('o').join('');
console.log(ans);