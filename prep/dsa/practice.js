let data = 0;
let value = '';

function apple(x){
    if(x<10){
        apple(x+1);
    }
    return value += x + ' ';
}
console.log(apple(data))