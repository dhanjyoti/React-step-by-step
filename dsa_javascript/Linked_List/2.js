//  2. Insert a node at the beginning of a linked list.
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
    insertAtBeginning(data){
        const newNode = new Node(data); //  Create a new node
        newNode.next = this.head;       //  Point new node's next to current head
        this.head = newNode;            //  Update head to point to new node
    }
}
const myList = new LinkedList();
console.log("Before insertion:", myList);   // Before insertion: LinkedList {head: null}

myList.insertAtBeginning(5);    // Inserting node with data 5 at the beginning

console.log("After insertion:", myList) //  After insertion: LinkedList {head: Node{data: 5, next: null}}