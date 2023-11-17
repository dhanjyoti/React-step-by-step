//  43. Determine the day of the week based on a user-input number (1 for Monday, 2 for Tuesday, etc.).

function dayOfWeek(number){
    let day;
    switch (number){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid";
    }
    return day;
}

let day = parseInt(prompt("enter case: "));
let result = dayOfWeek(day);
document.write(result);

