// 44. Shuffle the elements of an array randomly.
// You can shuffle the elements of an array randomly in JavaScript
//  using the Fisher-Yates (also known as Knuth) shuffle algorithm.
// let array = [2, 3, 4, 5, 6, 7];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let array = [2, 3, 4, 5, 6, 7];
  shuffleArray(array);
  
  console.log(array);