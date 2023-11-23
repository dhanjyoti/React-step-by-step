//  19. Remove a specific element from an array.

let arr = [1, 3, 5, 7, 9, 12, 24];

let target = 9;
for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        arr.splice(i, 1);
        break;
    }
}
console.log(arr);
