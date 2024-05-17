// Print only those objects that doesnot contains name

let arr = [
  {
    name: "Dhanjyoti",
  },
  {
    age: 123,
  },
  {
    name: "Dhanjyoti",
  },
  {
    marks: 200,
  },
];

let newObj = [];
for (let obj of arr) {
  if (!Object.keys(obj).includes("name")) {
    newObj.push(obj);
  }
}
console.log(newObj);
