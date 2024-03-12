// Give the count of frequency in end of the character 
// input: rrarabcb
// output1: {r:3,a:2,b:2,c:1};
// output2: r3a2b2c1

let str = "rrarabcb";

let frequency = {};
for(let i=0; i<str.length; i++){
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
}
console.log("Output 1: ", frequency);
let string = '';
for(let key in frequency){
    string += `${key}${frequency[key]}`
}
console.log("Output 2: ", string);