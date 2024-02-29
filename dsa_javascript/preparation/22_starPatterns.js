// *
// **
// ***
// ****
// *****
// let n = 5;
// for(let i=0; i<n; i++){
//   let star = '';
//   for(let j=0; j<=i; j++){
//     star += '*';
//   }
//   console.log(star)
// }


//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *
// let n = 5;
// for(let i=0; i<n; i++){
//   let star = '';
//     for(let j=i; j<n; j++){
//       star += ' ' +' '
//     }
//     for(let k=0; k<=i; k++){
//       star += '*'+' '
//     }
//     console.log(star)
// }


// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// let n = 5;
// for(let i=1; i<=n; i++){
//   let count = '';
//   for(let j=1; j<=i; j++){
//     count += 1 + ' ';
//   }
//   console.log(count)
// }


// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// let n = 5;
// for(let i=n; i>=1; i--){
//   let count = '';
//   for(let j=1; j<=i; j++){
//     count += j + ' ';
//   }
//   console.log(count)
// }


// *        *
// **      **
// ***    ***
// ****  ****
// ********** 
// let n = 5;
// for(let i=0; i<n; i++){
//   let star ='';
//   for(let j=0; j<=i; j++){
//     star += '*';
//   }
//   for(let k=n; k>=i*2-2; k--){
//     star += '_';
//   }
//   for(let l=0; l<=i; l++){
//     star += '*';
//   }
//   console.log(star)
// }


// **********
// ****  ****
// ***    ***
// **      **
// *        *
// let n = 5;
// for(let i=0; i<n; i++){
//   let star = '';
//   for(let j=n; j>i; j--){
//     star+= '*';
//   }
//   for(let k=0; k<i*2; k++){
//     star += '_';
//   }
//   for(let l=n; l>i; l--){
//     star += "*";
//   }
//   console.log(star);
// }


// ____*
// ___***
// __*****
// _*******
// *********
// let n = 5
// for(let i=1; i<=n; i++){
//     let count = '';
//     for(let j=1; j<=n-i; j++){
//         count += '_';
//     }
//     for(let k=1; k<=2*i-1; k++){
//         count += '*';
//     }
//     console.log(count)
// }