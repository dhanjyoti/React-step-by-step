//  14. Count the occurrences of a specific character in a string.

function countFrequency(str, charToCount){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === charToCount){
            count++;
        }
    }
    return count;
}
let str = "hello logo main hu kaun";
let ans = countFrequency(str, 'l');
console.log(`Frequency of b is: ${ans}`);