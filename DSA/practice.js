let arr = [5, 7, 34, 23, 12, 43, 96, 121];

let newArr = []
for(let i=0; i<=arr.length; i++){
    if(i === 3){
        continue
    }
    newArr +=arr[i] + " "

}
console.log(newArr)
// console.log(newArr)