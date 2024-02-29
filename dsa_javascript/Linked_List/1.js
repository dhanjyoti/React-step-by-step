//  1. Create an empty linked list.

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
}
const myList = new LinkedList();
console.log(myList);