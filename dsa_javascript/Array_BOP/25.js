// 25.    Find the intersection of two arrays. explain this question

let array1 = [2, 5, 7, 9, 8];
let array2 = [5, 6, 12, 9, 7, 566];

function findIntersection(array1, array2){
    let intersection = [];
    for(const element of array1){
        if(array2.includes(element)){
            intersection.push(element);
        }
    }
    return intersection;
}
let result = findIntersection(array1, array2);
console.log(result);