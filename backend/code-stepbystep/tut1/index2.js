const index2 = require('./index')

// console.log(index2.x)
// console.log(index2.y)
// console.log(index2)
// console.log(index2.z())

const arr = [2, 4, 7, 1, 3, 8, 3];
let result = arr.filter((item)=>{
    // console.log(item)
    return item===3
})
console.log(result)