// Remove the duplicate objects from an array of objects with same properties

let employeeList = [
    {
      first_name: "Eleanor",
      last_name: "Bolton",
      designation: "CEO, Co-Founder",
      age: 45,
    },
    {
      first_name: "Caspian",
      last_name: "Shields",
      designation: "CTO, Co-Founder",
      age: 34,
    },
    {
      first_name: "Marek",
      last_name: "Goodman",
      designation: "CFO",
      age: 31,
    },
    {
        first_name: "Marek",
        last_name: "Goodman",
        designation: "CFO",
        age: 31,
    },
    {
      first_name: "Buster",
      last_name: "Mackenzi",
      designation: "COO",
      age: 43,
    },
    {
      first_name: "Caspian",
      last_name: "Shields",
      designation: "CTO, Co-Founder",
      age: 34,
    },
];
let uniqueList = [...new Map(employeeList.map(item => [item.designation, item])).values()]
console.log(uniqueList)