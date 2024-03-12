// Give the count of frequency in front of the character 
// input: "mkamkaarra"
// output: 2m2k4a2r

let string = 'mkamkaarraki';
let frequency = {};
for(let i=0; i<string.length; i++){
    frequency[string[i]] = (frequency[string[i]] || 0) + 1;
}

let str = '';
for(let key in frequency){
    str += `${frequency[key]}${key}`;
}
console.log(str);