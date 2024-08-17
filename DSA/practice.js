let arr = [3, 6, 8, 9, 3, 8, 8, 7, 2, 5, 2];
let arrZ = [3, 6, 0, 0, 8, 9, 0, 7, 0, 5, 2, 0];

//  1.  maximum in an array
        // let max = arr[0];
        // for(let i=0; i<=arr.length; i++){
        //     if(arr[i] > max){
        //         max = arr[i]
        //     }
        // }
        // console.log(max)

//  2.  reverse the array
        // let newArr = [];
        // for(let i=arr.length-1; i>=0; i--){
        //     // newArr += arr[i] + " "
        //     newArr.push(arr[i])
        // }
        // console.log(newArr)

//  3.  sort an array
        // let sortedArr = arr.sort((a, b)=> a-b)
        // console.log(sortedArr)

//  4.  find second largest
        // let second = 2;
        // let sortedArr = arr.sort((a, b)=> a-b);
        // console.log(sortedArr[sortedArr.length-second])

//  5.  move all zero to the end
        // let newArr = [];
        // let zeroArr = [];
        // for(let i=0; i<arrZ.length; i++){
        //     if(arrZ[i] !== 0){
        //         newArr.push(arrZ[i])
        //     }
        // }
        // // console.log(newArr)
        // for(let i=0; i<arrZ.length; i++){
        //     if(arrZ[i] == 0){
        //         zeroArr.push(arrZ[i])
        //     }
        // }
        // // console.log(zeroArr)
        // let result = [...newArr, ...zeroArr]
        // console.log(result)

//  6.  find missing number


// --------------------


//  7.  Remove Duplicates
let c = []
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        c += arr[j]
    }
    console.log(c)
}