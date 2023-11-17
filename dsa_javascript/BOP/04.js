//  4. Take user input for their age and print it.

let age = prompt("Enter the age");

age = Number(age);

if(!isNaN(age)){
    console.log("The age is : " + age);
    console.log("the type is: " + typeof(age));
} else {
    console.log("empty!");
}

document.getElementById("hi").innerHTML = `The age is: ${age}`;