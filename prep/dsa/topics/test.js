// let arr = [7, 5, 3, 9, 11, 34, 11, 3, 3, 5];
let str = "my name is raman"

let x = "a";
let count = 0;
let n = str.split("");
for(let key in n){
    if(n[key] == x){
        count++;
    }
}
console.log(count)