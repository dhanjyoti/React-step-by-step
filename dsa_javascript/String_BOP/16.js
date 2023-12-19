//  16. Check if a string contains only alphabets.

let a = "abc1";
let onlyAlphabet = true;
for(let i=0; i<a.length; i++){
    if(!(a[i]>='a' && a[i]<='z') && !(a[i]>='A' && a[i]<='Z')){
        onlyAlphabet = false;
        break;
    }
}
if(onlyAlphabet){
    console.log(`${a} is only alphabet`);
} else {
    console.log(`${a} in not only alphabet`);
}