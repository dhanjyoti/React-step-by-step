//  Merge Two arrays

let arr1 = [3, 7, 12, 34, 56, 90];
let arr2 = [20, 30, 40, 63];

// Using for loop
// let arr = [];

// for(let i=0; i<arr1.length; i++){
//     arr[i] = arr1[i];
// }
// for(let i=0; i<arr2.length; i++){
//     arr[arr1.length+i] = arr2[i];
// }
// console.log(arr)


// // Using spread
// let arr = [...arr1, ...arr2];
// console.log(arr)


// Using while loop
let arr = [];
let a1 = 0;
let a2 = 0;
let a = 0;
while(a1<arr1.length && a2<arr2.length){
    if(arr1[a1] < arr2[a2]){
        arr[a] = arr1[a1];
        a1++;
    } else{
        arr[a] = arr2[a2];
        a2++;
    }
    a++;
}
while(a1<arr1.length){
    arr[a] = arr1[a1];
    a1++;
    a++;
}
console.log(arr)
