//  22. Perform a case-insensitive string comparison.

let str1 = "Apple";
let str2 = "aPpLe";

// Convert both strings to lowercase and then compare
let lowercaseStr1 = str1.toLowerCase();
let lowercaseStr2 = str2.toLowerCase();

if (lowercaseStr1 === lowercaseStr2) {
  console.log("The strings are equal (case-insensitive)!");
} else {
  console.log("The strings are not equal (case-insensitive).");
}