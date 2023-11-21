//  15. Check if an array contains duplicate elements.

// let array = [4, 5, 6, 7, 9, 6, 3, 6];
let array = [4, 5, 6, 7, 9, 3 ];

function hasDuplicates(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }
    return false;
}

if(hasDuplicates(array)){
    console.log("has Duplicates");
} else {
    console.log("has no duplicates");
}