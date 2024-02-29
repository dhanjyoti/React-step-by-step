//  Double/Doubly Linked List


// Define the Node class to represent each element in the doubly linked list
class Node {
    constructor(data) {
      this.data = data; // Data stored in the node
      this.prev = null; // Pointer to the previous node, initially null
      this.next = null; // Pointer to the next node, initially null
    }
  }
  
  // Define the DoublyLinkedList class
  class DoublyLinkedList {
    constructor() {
      this.head = null; // Points to the head of the list, initially null
      this.tail = null; // Points to the tail of the list, initially null
      this.size = 0; // Size of the list, initially 0
    }
  
    // Method to insert a new node at the end of the list
    append(data) {
      const newNode = new Node(data); // Create a new node with the given data
  
      // If the list is empty, make the new node the head and tail of the list
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++; // Increment the size of the list
    }
  
    // Method to print the elements of the list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Method to print the elements of the list in reverse order
    printReverse() {
      let current = this.tail;
      while (current) {
        console.log(current.data);
        current = current.prev;
      }
    }
  
    // Method to get the size of the list
    getSize() {
      return this.size;
    }
  }
  
  // Example usage:
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // Output: 1 2 3
  console.log("Size:", list.getSize()); // Output: Size: 3
  console.log("Reverse:");
  list.printReverse(); // Output: 3 2 1
  
  
  