//  17. Check if a string is a palindrome.

let str = 'catrtac1';
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// function fact(str){
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

// let isPalindrome = fact(str) ? 'palindrome' : 'not palindrome';
// console.log(isPalindrome)


// function checkPalindrome(str){
//     let strArray = str.split('');
//     let mid = strArray.length / 2;
//     let left = 0;
//     let right = strArray.length - 1;
//     for(let i=0; i<mid; i++){
//         if(strArray[left] == strArray[right]){
//             left++;
//             right--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPalindrome(str2))


function isPalindrome(str){
    let j = str.length - 1;
    for(let i=0; i<str.length/2; i++){
        if(str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true;
}
console.log(isPalindrome(str));
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));