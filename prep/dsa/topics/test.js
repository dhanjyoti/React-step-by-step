// let arr = [7, 5, 3, 9, 11, 34, 11, 3, 3, 5];

let arr = [3,4,5,5,5,6,6,6,7,7,7,5,19, 23 , 23, 25];
let string = "Hello, Dhanjyoti";
function countFrequency(string){
    const frequency = {};
    string = string.replace(/ /g,'');
    for(let char of string){
        if(char in frequency){
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}
console.log(countFrequency(string))