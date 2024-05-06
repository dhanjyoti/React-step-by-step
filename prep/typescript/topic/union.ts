// let data : number | string = 10;

function combine(a:number | string, b:number | string) {
    if(a === 'number' && b === 'number'){
        return a+b;
    } else {
        return a.toString() + b.toString();
    }
}
console.log(combine(39, 49));
console.log(combine("dj", "rabha"));
