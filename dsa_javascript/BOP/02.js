//  2. Take user input for their name and print a personalized greeting.

let greeting = prompt("Enter your message", "hello");

if(greeting != null){
    document.getElementById("hi").innerHTML = greeting;
}