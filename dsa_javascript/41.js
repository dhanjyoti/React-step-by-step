//  41. Calculate the grade of a student based on their score.

function grade(marks){
    let Grade;
    if(marks >= 90 && marks<= 100){
        return Grade = 'A'; 
    } else if(marks >=80 && marks < 90){
        return Grade = "B";
    } else if(marks >=70 && marks < 80){
        return Grade = "C";
    } else if(marks >=60 && marks < 70){
        return Grade = "D";
    } else if(marks >=50 && marks < 60){
        return Grade = "E";
    } else if(marks >=40 && marks < 50){
        return Grade = "F";
    } else {
        return Grade = "Invalid";
    }
}
let marks = 10;
let result = grade(marks);
console.log(result);