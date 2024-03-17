# In Javascript, we have 6 falsy values:
```js
    1. false
    2. 0(zero)
    3. '' or ""(empty string)
    4. null
    5. undefined
    6. NaN
```
<!-- -------------------------------------------------------------------- -->

***Bitwise Operators***
    & | ^ ~ >> <<

***`&`*** `AND` operator in Javascript
    In JavaScript, the `&` operator is the bitwise `AND` operator. It performs a bitwise `AND` operation on each pair of corresponding bits in its operands.

    - For each pair of bits, the result is `1` if both bits are `1`, otherwise, it's `0`.
    - It operates on each bit position independently.

    Performing a bitwise AND operation:
        1st bit: 1 & 0 = 0
        2nd bit: 0 & 1 = 0
        3rd bit: 1 & 1 = 1
```js
    let a = 5;          // Binary: 101
    let b = 3;          // Binary: 011
    let result = a & b;     // Bitwise AND operation
    console.log(result);    // Output: 1 (Binary: 001)
```
<!-- -------------------------------------------------------------------- -->

***`!`*** `NOT` operator in Javascript
    In JavaScript, the `!` operator is the logical `NOT` operator. It's a unary operator, meaning it 
    operates on a single operand. The `!` operator is used to negate a boolean value, converting 
    true to false and false to true.

    - If the operand is true, `!` returns false.
    - If the operand is false, `!` returns true.
```js
    let x = true;
    let y = false;

    let result1 = !x; // Logical NOT of true, returns false
    let result2 = !y; // Logical NOT of false, returns true

    console.log(result1); // Output: false
    console.log(result2); // Output: true
```

```js
    let isLoggedIn = false;

    if (!isLoggedIn) {
        console.log("User is not logged in.");
    } else {
        console.log("User is logged in.");
}
```
<!-- -------------------------------------------------------------------- -->

***`|`*** `OR` operator in Javascript
    In JavaScript, the `|` operator is the bitwise `OR` operator. It performs 
    a bitwise `OR` operation on each pair of corresponding bits in its operands. 

    - For each pair of bits, the result is `1` if either of the bits is `1`, otherwise, it's `0`.
    - It operates on each bit position independently.

    Performing a bitwise OR operation:
        1st bit: 1 | 0 = 1
        2nd bit: 0 | 1 = 1
        3rd bit: 1 | 1 = 1
```js
    let a = 5;    // Binary: 101
    let b = 3;    // Binary: 011

    let result = a | b;  // Bitwise OR operation
    console.log(result); // Output: 7 (Binary: 111)
```
<!-- -------------------------------------------------------------------- -->

# ---------Sorting---------
A Sorting Algorithm is used to re-arrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide
the new order of elements in the respective data structure.

# ---------Bubble Sorting---------
Bubble Sorting is the simplest sorting algorithm that works by repeatedly swapping the
adjacent elements if they are in the wrong order. This algorithm is not suitable for
large data sets as its average and worst-case time complexity is quite high.  
***Time Complexity-> O(n^2) -> Big `O` of n to the power 2***

In Bubble Sort algorithm, 
1.  traverse from left and compare adjacent elements and the higher one is placed at right side. 
2.  In this way, the largest element is moved to the rightmost end at first. 
3.  This process is then continued to find the second largest and place it and so on until the data is sorted.

```js
    function bubbleSort(arr){
        //  bubble sort
        for(let i=0; i<arr.length-1; i++){
            for(let j=0; j<arr.length-i-1; j++){
                if(arr[j] > arr[j+1]){
                    //  swap
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    let array = [4, 6, 8, 3, 9, 2];
    let sortedArray = bubbleSort(array);
    console.log(sortedArray);
```
<!-- -------------------------------------------------------------------- -->

# ------------Quick Sort------------
Quick Sort is a sorting algorithm based on the Divide and Conquer algorithm
that picks an element as a pivot and partitions the given array around the
picked pivot by placing the pivot in its correct position in the sorted array.

The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.
***Time Complexity-> O(n^2)***

```js
    let arr = [5, 2, 9, 3, 6, 1, 8, 7];

    function quickSort(arr){
        if(arr.length <= 1){
            return arr;
        }
        const pivot = arr[0];
        const left = [];
        const right = [];
        for(let i=1; i<arr.length; i++){
            if(arr[i] < pivot){
                left.push(arr[i]);
            } else{
                right.push(arr[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    console.log(quickSort(arr));
```

<!-- -------------------------------------------------------------------- -->

# ----------Selection Sort----------
Selection Sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest(or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted. 
***Time Complexity-> O(n^2) -> Big `O` of n to the power 2***

```js
    let arr = [5, 7, 3, 1, 9];
    function selectionSort(arr){
        for(let i=0; i<arr.length-1; i++){
            let smallest = i;
            for(let j=i+1; j<arr.length; j++){
                if(arr[smallest] > arr[j]){
                    smallest = j;
                }
            }
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    let sortedArray = selectionSort(arr);
    console.log(sortedArray);
```
<!-- -------------------------------------------------------------------- -->

# -----------Merge Sort------------
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided i.e., the array has only one element left (an array with one element is always sorted). Then the sorted subarrays are merged into one sorted array.
 ***Time Complexity-> O(n log n)***

```js
    let arr = [4, 6, 14, 7, 9, 12, 5, 2]; 

    function mergeSort(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2);

        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }
    function merge(left, right){
        let sortedArr = [];
        while(left.length && right.length){
            if(left[0] < right[0]){
                sortedArr.push(left.shift());
            } else {
                sortedArr.push(right.shift());
            }
        }
        return [...sortedArr, ...left, ...right];
    }
    let result = mergeSort(arr);
    console.log(result);
```
<!-- -------------------------------------------------------------------- -->

# ---------Insertion Sort----------
Insertion sort is a simple sorting algorithm that works similar to the way we sort playing cards in our hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
***Time Complexity-> O(n^2)-> Big `O` of n to the power 2***

To sort an array of size `N` in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

```js
    function insertionSort(arr){
        for(let i=1; i<arr.length; i++){
            let j=i;
            while(j>0 && arr[j]<arr[j-1]){
                //  swap
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
            }
        }
        return arr;
    }
    let array = [3, 5, 8, 4, 2];
    let result = insertionSort(array);
    console.log(result); 
```
<!-- -------------------------------------------------------------------- -->

# Two pointer approach

<!-- -------------------------------------------------------------------- -->

# Stack
- The stack data structure is a sequential collection of elements that follows the principle of `Last In First Out`(LIFO).
- The last element inserted into the stack is first element to be removed.
- A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
- Stack is an abstract data type. It is defined by its behaiour rather than being a mathematical model.
- The stack data structure supports two main operations:
    * Push, which adds an element to the collection.
    * Pop, which removes the most recently added element from the collection.
Usages of Stack ->
* Browser history tracking
* Undo operation when typing
* Expression conversions
* Call stack in Javascript runtime



<!-- -------------------------------------------------------------------- -->

# Prefix Sum
- It is a simple yet powerful technique that allows to perform fast calculation on the sum  of elements in a given range(called contiguous segments of arrays).

Example: 
Input: 6, 3, -2, 4, -1, 0, 15
output: 6, 9, 7, 11, 10, 10, 5