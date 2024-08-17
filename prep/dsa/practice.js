let arr = [89, 23, 53, 65, 34, 29, 98, 12, 32];

function sorting(arr){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr
}
let newArr = sorting(arr);
console.log(newArr)