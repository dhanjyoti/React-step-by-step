//  10. Count the number of consonants in a string.

let word = "Hello, Dhanjyoti Rabha!";
let count = 0;
    word = word.replace(/ /g, '').replace(/!/g, "").replace(/,/g, '');

let vowels = ['a', 'e', 'i', 'o', 'u'];
let lowerString = word.toLowerCase();

for(let char of lowerString){
    if(vowels.includes(char)){
        count++;
    }
}
console.log(`Count of consonents: ${word.length - count}`);