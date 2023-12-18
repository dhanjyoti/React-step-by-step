
let word = "Hello, Dhanjyoti Rabha, how are you?";
let count = 0;
    word = word.replace(/ /g,'').replace(/!/g,'').replace(/'?'/g,'').replace(/,/g,'');

let vowels = ['a','e','i','o','u'];
for(let i=0; i<word.length; i++){
    let letter = word[i].toLowerCase();
    if(vowels.includes(letter)){
        count++;
    }
}
console.log(`Count of vowels are ${count}`);