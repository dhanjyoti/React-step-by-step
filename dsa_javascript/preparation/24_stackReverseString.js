// Reverse string with stack

let data = [];
let currentSize = data.length;
function push(newValue){
  data[currentSize] = newValue;
  currentSize += 1;
}
function pop(){
  lastRemoveItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemoveItem;
}
function reverseStr(item){      // call by reference - it works only in array and object
  for(let i=0; i<item.length; i++){
    push(item[i]);
  }
  for(let j=0; j<item.length; j++){
    item[j] = pop();
  }
}
let str = "dhanjyoti";
  str = str.split("");
reverseStr(str);
console.log(str.join(''));