//  7. Find the length of a linked list.

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
    //  Function to insert a node at the end of the linked list
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

        //  Set the next pointer of the last node to the new node
        current.next = newNode;
    }
    //  Function to find the length of the linked list
    findLength(){
        let length = 0;
        let current = this.head;

        //   Traverse the list and increment the length for each node
        while(current !== null){
            length++;
            current = current.next;
        }
        return length;
    }
}
const myList = new LinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

//  Find the length of the linked list
const length = myList.findLength();
console.log("Length of the linked list:", length);