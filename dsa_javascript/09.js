//  9. Take user input for a year and check if it's a leap year.

let input = prompt("Enter a value to find given Year is LeapYear or not");

let YearToTrack = parseInt(input);
if(!isNaN(YearToTrack)){
    if((YearToTrack % 4 === 0 && YearToTrack % 100 !== 0) || YearToTrack % 400 !== 0) {
        console.log("This year is a leap year.");
    } else {
        console.log("Not a leap year.");
    } 
} else {
    alert("Invalid Input");
}