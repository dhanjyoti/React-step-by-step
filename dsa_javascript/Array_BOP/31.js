//  31. Print a pattern of numbers in a pyramid shape.

// Define the number of rows for the pyramid
const numberOfRows = 5;

// Outer loop for each row
for (let i = 1; i <= numberOfRows; i++) {
  let row = '';

  // Inner loop for spaces
  for (let j = 1; j <= numberOfRows - i; j++) {
    row += ' ';
  }

  // Inner loop for stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += k;
  }

  console.log(row);
}
