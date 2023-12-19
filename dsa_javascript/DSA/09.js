//  maximum & minimum in an array

// let arr = [5, 7, 76, 43, 34, 3, 23];
// let max = arr[0];
// let min = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     } else if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log('Maximum: ', max);
// console.log('Minimum: ', min);

var num = 5;
for(var i=num; i>0;  i--){
    var string = ' ';
    for(var j=0; j<i; j++){
    string = string + '*';
}
    console.log(string)
}