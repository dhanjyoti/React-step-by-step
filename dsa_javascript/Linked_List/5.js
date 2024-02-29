//  5. Delete a node from the end of a linked list.

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
    // function to insert a node at the end of the linked list
    insertAtEnd(data){
        const newNode = new Node(data);

        //  If the list is empty, set the new nodeas the head
        if(!this.head){
            this.head = newNode;
            return;
        }

        //  Traverse to the end of the list
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        //  Set the next pointer of the last node to the node
        current.next = newNode;
    }
    // Function to delete a node from the end of the linked list
    deleteFromEnd(){
        // If the list is empty, do nothing
        if(!this.head){
            return;
        }
        //  If the list contains only one node, set the head to null
        if(!this.head.next){
            this.head = null;
            return;
        }

        //   Traverse to the second-to-list node
        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
        }

        // set the next pointer of the second-to-last node to null
        current.next = null;
    }
    // Function to print the linked list (for demonstration)
    printList(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}
const myList = new LinkedList();
myList.insertAtEnd(1)
myList.insertAtEnd(2)
myList.insertAtEnd(3)

// print the linked list before deletion
console.log("before deletion: ");
myList.printList();

// Delete a node from the end of the linked list
myList.deleteFromEnd();

// Print the linked list after  deletion
console.log("After deletion: ");
myList.printList();