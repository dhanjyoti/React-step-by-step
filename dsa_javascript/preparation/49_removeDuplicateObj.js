// Remove duplicates from an array of objects


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
      last_name: "Goodman",
      designation: "CFO",
      age: 31,
      first_name: "Marek",
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


const getId = (item) => {
    return item.first_name + item.last_name + item.designation + item.age;
};

// const getId = (item) => {
//   let data = '';
//   let value = Object.keys(item);
//   return value.map((item)=>{
//     data += item;

//   })
// };

function removeDuplicate(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(getId(arr[i]) === getId(arr[j])){
                result.push(i);
            }
        }
    }
    for(let i=0; i<result.length; i++){
        arr.splice(result[i], 1);
    }
    console.log(arr)
}
removeDuplicate(employeeList);


// const res = employeeList.reduce(
//     (acc, curr) => {
//       const id = getId(curr);
//       if (acc.check[id]) {
//         return acc;
//       }
  
//       acc.check[id] = true;
  
//       acc.data.push(curr);
//       return acc;
//     },
//     {
//       check: {},
//       data: [],
//     }
//   );
  
//   console.log(res.data);

