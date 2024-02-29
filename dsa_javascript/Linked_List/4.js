//  4. Delete a node from the beginning of a linked list.

class Node{
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
        const newNode = new  Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteFromBeginning(){
        if(!this.head){
            return;
        }
        // Update the head pointer to point to the next node
        this.head = this.head.next;
    }
    // Function to print the linked list(for demonstration)
    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}
const myList = new LinkedList();
myList.insertAtBeginning(1);
myList.insertAtBeginning(2);
myList.insertAtBeginning(3);

// Print the linked list before deletion
console.log("Before deletion");
myList.printList();

// Delete a node from the beginning of the linked list
myList.deleteFromBeginning();

// Print the linked list after deletion
console.log("After deletion");
myList.printList();