//  15. Check if a string contains only digits.

function containsOnlyDigit( str ){
    for(let i=0; i<str.length; i++){
        if(str[i] < '0' || str[i] > '9'){
            return false;
        }
    }
    return true;
}
let str1 = " 98146ydf ";
let str2 = ' 431346 ';
let ans1 = containsOnlyDigit( str1 );
let ans2 = containsOnlyDigit( str2 );
console.log( ans1 );
console.log( ans2 );

