//  21. Compare two strings lexicographically.

let str1 = "apple";
let str2 = "banana";

if (str1 < str2) {
  console.log(`${str1} comes before ${str2} lexicographically.`);
} else if (str1 > str2) {
  console.log(`${str1} comes after ${str2} lexicographically.`);
} else {
  console.log(`${str1} and ${str2} are equal lexicographically.`);
}
