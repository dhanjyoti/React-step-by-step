//  45. Determine if a triangle with given side lengths is equilateral, isosceles, or scalene.

function tringleType(side1, side2, side3){
    if(side1 == side2 && side2 == side3){
        return "Equilateral Trinagle";
    } else if(side1 == side2 || side1 == side3 || side2 == side3){
        return "Isosceles Trinngle";
    } else {
        return "Scelene Trinngle";
    }
}
let side1 = 5;
let side2 = 8;
let side3 = 8;
let result = tringleType(side1, side2, side3);
console.log(result); 