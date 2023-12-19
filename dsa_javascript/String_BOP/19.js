//  19. Find the first non-repeated character in a string.

function findCharacterRepeat(str){
    let charFrequency = {};
    for(let char of str){
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    for(let char of str){
        if(charFrequency[char] === 1){
            return char;
        }
    }
    return null;
}
let str = 'ssfeddg';
let answer = findCharacterRepeat(str);
console.log(`the first non-repeated character in a string: ${answer}`);