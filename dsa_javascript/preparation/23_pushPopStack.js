//  push and pop in a stack and give it a limit of maximum 5 elements when we push

let data = [];
let currentSize = data.length;
let max = 5;
function push(newValue){
  if(currentSize >= max) return newValue;
  data[currentSize] = newValue;
  currentSize += 1; 
}
function pop(){
  if(currentSize>0){
    currentSize -= 1;
    data.length = currentSize;
  }
  return "stack is empty";
}
push(20);
push(30);
push(10);
push(2);
// push(25);
// push(23);
// push(67);
pop()
pop()

console.log(data)