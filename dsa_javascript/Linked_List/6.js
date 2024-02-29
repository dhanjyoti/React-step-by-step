//  6. Traverse and print elements of a linked list.

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    // Function to insert a node at the end of the linked List
    insertAtEnd(data){
        const newNode = new Node(data);

        //  If the list is empty, set the new node as the head
        if(!this.head){
            this.head = newNode;
            return;
        }
        //  Traverse to the end of the list
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        // Set the next pointer of the last node to the new node
        current.next = newNode;
    }

    //  Function to print the linked list
    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}
const myList = new LinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

myList.printList();