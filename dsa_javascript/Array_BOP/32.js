//  32. Print a pattern of stars in a diamond shape.

// for(var i=0; i<5; i++){
//     var str = '';
//     for(var j=5; j>i; j--){
//         str += ' ';
//     }
//     for(var k=0; k<=i; k++){
//         str += '*';
//     }
//     for(var l=1;l<=i; l++){
//         str += '*';
//     }
//     console.log(str);
// }
// for(var i=5; i>=0; i--){
//     var str = '';
//     for(var j=5; j>i; j--){
//         str += ' ';
//     }
//     for(var k=0; k<=i; k++){
//         str += '*';
//     }
//     for(var l=1;l<=i; l++){
//         str += '*';
//     }
//     console.log(str);
// }

function printDiamondPattern(size) {
    for (let i = 0; i < size; i++) {
      let Str = "";
      for (let j = 0; j < size - i - 1; j++) {
        Str += " ";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        Str += "*";
      }
  
      console.log(Str);
    }
  
    for (let i = size - 2; i >= 0; i--) {
      let Str = "";
      for (let j = 0; j < size - i - 1; j++) {
        Str += " ";
      }
  
      for (let k = 0; k < 2 * i + 1; k++) {
        Str += "*";
      }
  
      console.log(Str);
    }
  }
  printDiamondPattern(5);