//  1. Print the characters of a string one by one.

let name = "hello dhan";

// accumulator = _

[...name].reduce((_, char)=>{
    console.log(char);
    return null;
}, null);