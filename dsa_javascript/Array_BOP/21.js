//  21. Find and print all subarrays of an array.

let array = [0, 1, 2, 3];

function subArrays(arr){
    for(let i=0; i<arr.length; i++){
        let subArray = [];
        for(let j=i; j<arr.length; j++){
            subArray.push(arr[j]);

            console.log(subArray);
        }
    }
}

let result = subArrays(array);
console.log(result);