**let arr = [3,4,5,5,5,6,6,6,7,7,7,19, 23 , 23, 25];**
**let str = "hello wrold";**

# Frequency of a number in an Array
```js
let count = 0;
let x = 5;
for(let element of arr){
    if(element == x){
        count++;
    }
}
console.log(count)
```

# String
```js
let x = 'o';
let frequency = 0;
    str.toLowerCase();
    x.toLowerCase();
for(let char of str){
    if(char === x){
        frequency++;
    }
}
console.log(frequency);
```

# Count the Frequency of each element from a given array
```js
function countFrequency(arr){
    const frequency = {};
    for(let i=0; i<arr.length; i++){
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    return frequency;
}
let result = countFrequency(arr);
console.log(result)
```

# String
```js
function frequency(str){
   let frequency = {};
   str = str.replace(/ /g,'');
   for(let char of str){
       if(char in frequency){
           frequency[char]++; 
           } else {
           frequency[char] = 1;
       }
    }
    return frequency;
}
console.log(frequency(str))
```

# •⁠  ⁠Write a code to print each element of array only once even they are repeating more than once in O(n) time complexity
// Input - 2,9,7,9,7,9
// Output- 2,9,7
```js
let sortedArray = arr.sort((a,b)=>a-b);
let nonRepeatedArray = [];
for(let i=0; i<sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i+1]){
        nonRepeatedArray.push(sortedArray[i]);
    }
}
console.log(nonRepeatedArray)
```

# String
```js
let frequency = {};
let uniqueCharacters = [];

for (let char of str) {
    if (!(char in frequency)) {
        frequency[char] = true;
        uniqueCharacters.push(char);
    }
}
console.log(uniqueCharacters.join(''))
```

# •⁠  ⁠Given an integer array nums and an integer k, return the kth largest element.
// Condition : You are not allowed to use any predefined functions 
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

/* optional
```js
function sortedArray(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let sorted = sortedArray(arr)
console.log(sorted)

let nonRepeatedArray = [];
for(let i=0; i<sorted.length; i++){
    if(sorted[i] !== sorted[i+1]){
        nonRepeatedArray.push(sorted[i]);
    }
}
```
*/
```js
let kth = 3;
let result = nonRepeatedArray[nonRepeatedArray.length - kth]
console.log(result)
```

#  MergeSort
```js
function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
function merge(left, right){
    let sortedArr = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right];
}
let arr1 = [3, 6, 9, 7, 5, 1, 2];
console.log(mergeSort(arr1))
```

#  Binary Search
```js
function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2);
        if(target === arr[mid]){
            return mid;
        }
        if(target < arr[mid]){
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 19))
```

# •⁠  ⁠Convert a String "Hello" to a LinkedList and then print that Linkedlist. H->E->L->L->O
```js
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + (current.next ? '->' : '');
            current = current.next;
        }
        console.log(result);
    }
}
function stringToLinkedList(str){
    const linkedList = new LinkedList();
    for(let char of str){
        linkedList.append(char);
    }
    return linkedList;
}
const linkedList = stringToLinkedList(str);
linkedList.print();
```