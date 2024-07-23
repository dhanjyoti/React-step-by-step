let array = [89, 23, 53, 65, 34, 29, 98, 12, 32];

const newValue = array.reduce((acc, cur)=>{
    return acc + cur;
})
console.log(newValue)