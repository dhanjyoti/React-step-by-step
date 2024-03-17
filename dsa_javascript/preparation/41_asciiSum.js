let s1 = 'sea';
let s2 = 'eat';
function newFunction(s1, s2){
    let result1 = '';
    let result2 = '';
    for(let char of s1){
        if(s2.includes(char)){
            result1 += char;
            result2 += char;
        }
    }
    return result1, result2;
}
// console.log(newFunction(s1, s2))
let string = newFunction(s1, s2);
console.log(string);

let asciiValue = [];
for(let i=0; i<string.length; i++){
    let newString = string.charCodeAt(i);
    asciiValue.push(newString);
}
console.log(asciiValue);

let sum = 0;
for(let i=0; i<asciiValue.length; i++){
    sum += asciiValue[i];
}
console.log(sum)