//  3. Insert a node at the end of a linked list.

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    insertAtEnd(data){
        const newNode = new  Node(data);
        // If the list is empty, set the new node as the head
        if(!this.head){
            this.head = newNode;
            return;
        }
        // Traverse to the end of the list
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }
}
const myList = new LinkedList();
console.log("before insertion", myList);

myList.insertAtEnd(5);
console.log("after insertion", myList);