//  29. Implement a linear search algorithm.

function LinearSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(key === arr[i]){
            console.log("Key is found at: ", i);
            return;
        }
    }
    console.log("Key is not present in the array");
}
let arr = ["dj", "ddd", "ttt", "jjjj", "lll"];
let key = "lll"
LinearSearch(arr, key);
