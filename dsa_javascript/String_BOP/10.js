//  10. Count the number of consonants in a string.

let word = "I feel good, when I am hhhappy!";
let count = 0;
    word = word.replace(/ /g,'').replace(/!/g,'').replace(/,/g,'');

let vowels = ['a','e','i','o','u'];

let lowerStr = word.toLowerCase();
for(let char of lowerStr){
    if(vowels.includes(char)){
        count++;
    }
}
console.log(`Count of consonents: ${word.length - count}`);