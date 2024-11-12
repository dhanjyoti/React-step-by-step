//  29. Check if two strings are anagrams.

function isAnagram(str1, str2){
    let clearstr1 = str1.replace(/\s/g, "").toLowerCase();
    let clearstr2 = str2.replace(/\s/g, "").toLowerCase();

    return (
        clearstr1.split("").sort().join("") ===
        clearstr2.split("").sort().join("")
    )
}

let string1 = "hologram hi";
let string2 = "hioogramhl";

if(isAnagram(string1, string2)){
    console.log(`${string1} and ${string2} are Anagram!`);
} else {
    console.log(`${string1} and ${string2} are  Not Anagram!`);
}