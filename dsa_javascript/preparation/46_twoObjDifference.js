// Check 2 two arrays, if keys are upside down
let obj1 = {
  first_name: "Marek",
  last_name: "Goodman",
  designation: "CFO",
  age: 31,
};
let obj2 = {
  last_name: "Goodman",
  designation: "CFO",
  age: 31,
  first_name: "Marek",
};
let equal = true;
for (let key in obj1) {
  if (obj1[key] != obj2[key]) {
    equal = false;
    break;
  }
}
console.log(equal);