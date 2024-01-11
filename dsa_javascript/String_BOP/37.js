// 37. Implement the startsWith() method without using the built-in method.

function customStartsWith(str, prefix){
    if(prefix.length > str.length){
        return false;
    }
    for(let i=0; i<prefix.length; i++){
        if(str[i] !== prefix[i]){
            return false;
        }
    }
    return true;
}
const str = "Hello, World!";
const prefix = "Hello";

console.log(customStartsWith(str, prefix));