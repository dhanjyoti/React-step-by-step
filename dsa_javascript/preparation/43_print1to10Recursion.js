// Print from 1 to 10 using Recursion

// let start = 1;
// function counting(num){
//     if(num > 10){
//         return;
//     }
//     console.log(num);
//     recursion(num+1);
// }
// recursion(start)


// Print 10 to 1 using Recursion

let start = 1;
function recursion(num){
    if(num > 10){
        return;
    }
    recursion(num + 1);
    console.log(num);
}
recursion(start)

