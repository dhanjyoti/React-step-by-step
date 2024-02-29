let length = prompt("Please enter Arrays length: ");
let arr=[];
for(let i=0; i<length; i++){
    // Step 1: Get the value
    let val = prompt(`Please enter value of [${i}] `);
    // Step 2: Assign value into the array
    arr[i] = val;
}

console.log(arr)
