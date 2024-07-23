// const obj = [
//     {name: "jhon", age: 2, phone: 56789},
//     {name: "jonathan", phone:876},
//     {name: "john", age:43}
// ]

// const newObj = obj.map(function(ele){
//     return `${ele.name} ${ele.phone}`
// })
// console.log(newObj)

// let users = [
//     {name: "john", age:10, work: "programmer"},
//     {name: "h", age:20, work: "analyst"},
//     {name: "dd", age:32, work: "programmer"},
//     {name: "dsd", age:40, work: "programmer"},
//     {name: "johsewn", age:45, work: "coder"},
//     {name: "joheqewqn", age:34, work: "painter"},
//     {name: "rehn", age:15, work: "programmer"}
// ]


// let filterUsers = [];
// for(let i=0; i<users.length; i++){
//     if(users[i].age > 30 && users[i].work === "programmer"){
//         filterUsers = [...filterUsers, users[i]]
//     }
// }

let filterUsers = users.filter(i => i.age > 30 && i.work === "programmer")
// console.log(filterUsers)
let users = [2, 4, 6, 7, 5]
console.log(...users)