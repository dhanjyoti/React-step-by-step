// 39. Rotate a square 2D array by 90 degrees.

let TwoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  let result = [];
  
  for (let i = 0; i < TwoDArray[0].length; i++) {
    let col = [];
  
    for (let j = 0; j < TwoDArray.length; j++) {
      col.push(TwoDArray[j][i]);
    }
    result.push(col);
  }
  result = result.map((row) => row.reverse());
  
  console.log(result);
  
  