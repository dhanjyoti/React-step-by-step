//  32. Write a function to calculate the volume of a sphere given its radius.

function calculateSphereVolume(radius){
    if(radius < 0){
        console.log("Can't find volume of sphere with a negative radius!");
        return null;
    }

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume;
}
const Radius = 5;
const volume = calculateSphereVolume(Radius).toFixed(2);

console.log(volume);