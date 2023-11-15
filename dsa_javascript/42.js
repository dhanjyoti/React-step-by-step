//  42. Determine if a year entered by the user is a leap year.

function isLeapYear(year){
    if((year%4===0 && year%100!==0) || year%400===0){
        return "is a leap yeaar";
    } else {
        return "not aleap year";
    }
}
let input = parseInt(prompt("enter year"));
let result = isLeapYear(input);
document.write(result);