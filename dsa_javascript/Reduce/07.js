//  20. Insert an element at a specific position in an array.

// The reduce method in JavaScript is typically used for reducing an array to a single value, 
// and it's not the most suitable method for inserting elements at specific positions. 
// However, you can use reduce creatively to achieve this, but keep in mind that it might not be 
// as clear or efficient as using methods like splice.

let array1 = [1, 2, 3, 4, 5];
let elementToInsert = 6;
let positionToInsert = 2;

let newArray = array1.reduce((acc, currentElement, currentIndex) => {
  if (currentIndex === positionToInsert) {
    acc.push(elementToInsert, currentElement);
  } else {
    acc.push(currentElement);
  }
  return acc;
}, []);

console.log(newArray);