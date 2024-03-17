let app = require('./app');

console.log(app);
console.log(app.x);
console.log(app.z());

let arr = [4, 5, 7, 8, 2, 6];
// arr.filter((item)=>{
//     console.log(item)
// })

let result = arr.filter((item)=>{
    return item === 8
})
console.log(result)