let arr = [5, 7, 34, 23, 12, 43, 96, 121];

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
<<<<<<< HEAD
console.log(bubbleSort(arr))
=======
console.log(bubbleSort(arr))
//  Time complexity = O(n^2)
//  Space complexity = O(1)
>>>>>>> e8caacf (updated)
