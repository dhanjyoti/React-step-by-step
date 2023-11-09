//  25. Take user input for a string and check if it's a palindrome.

function isPalindrome(str){
    // str = str.toLowerCase().replace(/ /g, "");
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

const input = "docod";
if(isPalindrome(input)){
    console.log(`${input} is a Palindrome.`);
} else {
    console.log(`${input} is a not a Palindrome.`);
}