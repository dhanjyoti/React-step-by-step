//  Linear Search

let arr = ["dj", "ddd", "ttt", "jjjj", "lll"];

function lineatSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(key === arr[i]){
            return i;
        }
    }
    return -1;
}
let key = 'jjjj';
console.log(lineatSearch(arr, key));