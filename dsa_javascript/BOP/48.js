//  48. Calculate the area and perimeter of a rectangle or square based on user input.

function area(length, width){
    return length * width;
}
function perimeter(length, width){
    return 2*(length + width);
}

let l = 20;
let w = 32;

let areaResult = area(l, w);
let perimeterResult = perimeter(l, w);

console.log("Area of Rectangle or Square" + areaResult);
console.log("perimeter of Rectangle or Square" + perimeterResult);