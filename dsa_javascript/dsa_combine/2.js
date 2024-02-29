// •⁠  ⁠Convert a String "Hello" to a LinkedList and then print that Linkedlist. H->E->L->L->O




// Define a class for the nodes of the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define a class for the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    // Method to add a new node to the end of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    // Method to print the linked list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + (current.next ? '->' : ''); // Add '->' only if there's a next node
            current = current.next;
        }
        console.log(result);
    }
}

// Function to convert a string to a linked list
function stringToLinkedList(str) {
    const linkedList = new LinkedList();
    for (let char of str) {
        linkedList.append(char);
    }
    return linkedList;
}

// Example usage:
const str = "Hello";
const linkedList = stringToLinkedList(str);
linkedList.print(); // Output: H->e->l->l->o

