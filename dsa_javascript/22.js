//  22. Find and print the largest element in an array.

let number = [2, 4, 6, 8, 9, 7, 5, 3];

let max = number[0];
for(let i=1; i<number.length; i++){
    if(number[i]>max){
        max = number[i];
    }
}
console.log("The largest number is: "+ max);