//  30. Capitalize the first letter of each word in a given sentence.

function capitalizeWords(str){
    let words = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
}
let word = capitalizeWords("the first one to do!");

console.log(word);
