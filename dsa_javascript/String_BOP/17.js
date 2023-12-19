//  17. Check if a string is a palindrome.

function fact(str){
    str = str.toLowerCase().replace(/ /g, '');
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let str = 'catrtac1';
let isPalindrome = fact(str) ? 'palindrome' : 'not palindrome';
console.log(isPalindrome)