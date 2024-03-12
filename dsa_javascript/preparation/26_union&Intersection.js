// Find the Union and Intersection of the two sorted arrays.

// Input : arr1[] = {1, 3, 4, 5, 7}
// arr2[] = {2, 3, 5, 6}
// Output : Union : {1, 2, 3, 4, 5, 6, 7}
// Intersection : {3, 5}

let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];
// let union = new Set([...arr1, ...arr2])
let newArr = [...arr1, ...arr2];
let sortedArr = newArr.sort((a,b)=>a-b);

let union = [];
for(let i=0; i<sortedArr.length; i++){
    if(sortedArr[i] !== sortedArr[i+1]){
        union.push(sortedArr[i]);
    }
}

let intersection = [];
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            intersection.push(arr1[i]);
        }
    }
}
console.log(union)
console.log(intersection)