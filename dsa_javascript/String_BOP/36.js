// 36. Implement the indexOf() method without using the built-in method.

function customIndexOf(str, searchvalue, startIndex=0){
    if(startIndex < 0){
        startIndex = Math.max(0, str.length + startIndex);
    }
    for(let i=startIndex; i<str.length; i++){
        let match = true;
        for(let j=0; j<searchvalue.length; j++){
            if(str[i+j] !== searchvalue[j]){
                match = false;
                break;
            }
        }
        if(match){
            return i;
        }
    }
    return -1;
}
const sentence = "Hello, World!";
const searchWord = "World";
const index = customIndexOf(sentence, searchWord);

console.log(index);