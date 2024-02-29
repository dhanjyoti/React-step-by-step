let num = 34543;

function checkPalindrome(num){
    let numArray = num.toString().split('');
    let numArrayLength = numArray.length;   // 5
    let x = 0; // 0
    let y = numArrayLength-1;    // 4 
    for(let i=0; i<numArrayLength; i++){   
        if(numArray[x] == numArray[y]){
            x++;
            y--;   // 3
        } else {
            return false;
        }
    }
    return true;
}
let result = checkPalindrome(num);
console.log(result);

// function isPalindrome(num){
//     return num === +num.toString().split("").reverse().join("");
// }
// let result = isPalindrome(12321);
// console.log(result)