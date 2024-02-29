// compare & print the index of 2nd array
arr1 = [3, 2, 1, 7];
arr2 = [1, 8, 7, 6, 9, 5];

let indexes = '';
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            indexes += j + " ";
        }
    }
}
console.log("common elements present in indexes:", indexes);

