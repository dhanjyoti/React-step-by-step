//  26. Take user input for a string and count the number of vowels and consonants.

/*
let word = "I live in Guwahati";
let count = 0;

word = word.replace(/ /g, '');

for(let i=0; i<word.length; i++){
    let letter = word[i].toLowerCase();
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        count++;
    }
}
document.write(`Vowels: ${count}, & Consonants: ${word.length - count}`);
document.write(`<br> String is: ${word}`); 
*/

let word = "I feel good!!";
let count = 0;
    word = word.replace(/ /g,'').replace(/!/g,'');

let vowels = ['a','e','i','o','u'];
for(let i=0; i<word.length; i++){
    let letter = word[i].toLowerCase();
    if(vowels.includes(letter)){
        count++;
    }
}
document.write(`Vowels: ${count}, & Consonants: ${word.length - count}`);
document.write(`<br> String is: ${word}`); 