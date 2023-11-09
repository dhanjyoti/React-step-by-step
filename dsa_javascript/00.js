const a = parseInt(prompt("Enter the numbers 1"));
const b = parseInt(prompt("Enter the numbers 2"));
const type = prompt("Enter operation you want to perform Ex(subtraction,addition,multiplication,division)"
).toUpperCase();

if(type === "A"){
    function addition(a, b){
        return a + b;
    }
    const add = addition(a, b);
    document.write(add);
} else if(type === "S"){
    function substraction(a, b){
        return a - b;
    }
    const sub = substraction(a, b);
    document.write(sub);
} else if(type === "M"){
    function multiplication(a, b){
        return a * b;
    }
    const multi = multiplication(a, b);
    document.write(multi);
} else if(type === "D"){
    function division(a, b){
        return a / b;
    }
    const div = division(a, b);
    document.write(div);
} else if(type === "R"){
    function reminder(a, b){
        return a % b;
    }
    const rem = reminder(a, b);
    document.write(rem);
} else {
    document.write("not a valid input");
}

