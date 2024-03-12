// Find elements which has appeared only ones in an array

let arr = [3, 4, 1, 2, 1, 1, 3, 5, 6, 6, 7, 7, 3, 1, 7];

let result = {};
for(let i=0; i<arr.length; i++){
    result[arr[i]] = (result[arr[i]] || 0) + 1;
}
for(let key in result){
    if(result[key] == 1)
        console.log(key)
}