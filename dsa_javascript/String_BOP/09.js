//  9. Count the number of vowels in a string.

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
console.log(`Count of vowels are ${count}`);