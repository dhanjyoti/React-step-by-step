//  Palindrome String

let str = 'catrtac1';
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// function isPalindrome(str){
//     str = str.toLowerCase().replace(/ /g, '');
//     let left = 0;
//     let right = str.length - 1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome(str))

function isPalindrome(str){
    let j = str.length - 1;
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[j]){
            return false;
        }
        j--;
    } 
    return true;
}
console.log(isPalindrome(str));
console.log(isPalindrome(str2));