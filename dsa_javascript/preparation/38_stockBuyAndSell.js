/* 
    Buy stock first and the then sell the stock, 
    buy at lowest price and sell at highest price & show the 
    maximum profit gained after selling the stock 
*/

// let arr = [7, 9, 1, 3, 6, 8, 7, 4];

// let lowestStock = Math.min(...arr);
// console.log(lowestStock)
// let lowestIndex = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<arr[lowestIndex]){
//         lowestIndex = i
//     }
// }
// console.log(lowestIndex) // index of lowest stock

// let newArray = arr.slice(lowestIndex);
// // console.log(newArray)

// let highestStock = newArray[0];
// for(let i=0; i<newArray.length; i++){
//     if(highestStock<newArray[i]){
//         highestStock = newArray[i];
//     }
// }
// console.log(highestStock)

// let stockProfit = highestStock - lowestStock;
// console.log(stockProfit)

let arr = [7, 9, 1, 3, 6, 8, 7, 4];

function stockBuyAndSell(arr){
    let maxProfit = 0;
    let minSoFar = arr[0];
    for(let i=0; i<arr.length; i++){
        minSoFar = Math.min(minSoFar, arr[i]);
        let profit = arr[i] - minSoFar;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

console.log(stockBuyAndSell(arr));  // Here we are trying to sell each time