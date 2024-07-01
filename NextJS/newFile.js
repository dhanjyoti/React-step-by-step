const str = "This is a file."
// new line.
// this is new li
// how are you

const obj = {};
for(let x of str){
    if(obj[x]){
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }
}
console.log(obj);