//  Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.
// (use two pointer approach)


function isPairSum(A, N, X){
    let i=0; 
    let j=N-1;
    while(i<j){
        if(A[i] + A[j] == X) return true;
        else if(A[i] + A[j] < X) j--;
        else i++;
    }
    return false;
}
let arr = [5, 6, 2, 7, 4, 9, 3];
let arrSize = 7;
let targetValue = 11;
let result = isPairSum(arr, arrSize, targetValue);
console.log(result);