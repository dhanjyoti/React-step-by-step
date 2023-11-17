// 40. Write a function to generate a random number within a given range.

function randomNumber(max, min){
    if(typeof min !== "number" || typeof max !== "number"){
        throw new Error("Both arguments must be numbers!");
    }
    if(min>max){
        [min, max] = [max, min];
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 10;
    return randomNumber;
}
const result = randomNumber(10, 20);
console.log(result);