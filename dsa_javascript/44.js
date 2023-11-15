//  44. Check if a character entered by the user is a vowel or a consonant.

function vowelOrConsonent(char){
    let character = char.toLowerCase();
    if(chararacter === 'a' ||
        chararacter === 'e' ||
        chararacter === 'i' ||
        chararacter === 'o' ||
        chararacter === 'u'
    ){
        return "it is a vowel";
    } else {
        return "it is a consonent";
    }
}
let input = prompt("Enter a character");
let result = vowelOrConsonent(input);
document.write(result);