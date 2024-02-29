let wordString = "Hello World";
let stringArray = wordString.toLowerCase().replace(/ /g,'').split('');

let stringArrayLength = stringArray.length;

let vowelArray = ['a', 'e', 'i', 'o', 'u'];

// let vowelArrayLength = vowelArray.length;
let vowelCount = 0;
for(let i=0; i<stringArrayLength; i++){
    if(stringArray[i] == 'a'||stringArray[i] =='e'||stringArray[i] =='i'||stringArray[i] =='o'||stringArray[i] =='u'){
        // if(vowelArray.includes(stringArray[i])){
        vowelCount++;
        // console.log(stringArray[i])
    }
}
console.log(vowelCount)