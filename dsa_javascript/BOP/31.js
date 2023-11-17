//  31. Write a function to calculate the area of a circle given its radius.

function calculateCircle(radius){
    if(radius<0){
        console.log(("Can't find area of circle with Negative-Radius!"));
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}
let Radius = 5;
const area = calculateCircle(Radius).toFixed(2);

console.log(area);