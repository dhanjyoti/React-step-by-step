//  Single/Singly Linked List

// A single linked list, often referred to as a singly linked list, is a fundamental data structure 
// in computer science. It consists of a sequence of elements called nodes, where each node contains 
// a value (or data) and a reference (or pointer) to the next node in the sequence.
// The last node in the list points to null, indicating the end of the list.



// Define the Node class to represent each element in the linked list
class Node {
    constructor(data) {
      this.data = data; // Data stored in the node
      this.next = null; // Pointer to the next node, initially null
    }
  }
  
  // Define the LinkedList class
  class LinkedList {
    constructor() {
      this.head = null; // Points to the head of the list, initially null
      this.size = 0; // Size of the list, initially 0
    }
  
    // Method to insert a new node at the end of the list
    append(data) {
      const newNode = new Node(data); // Create a new node with the given data
  
      // If the list is empty, make the new node the head of the list
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        // Iterate through the list until we reach the last node
        while (current.next) {
          current = current.next;
        }
        // Append the new node to the end of the list
        current.next = newNode;
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
  
    // Method to get the size of the list
    getSize() {
      return this.size;
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // Output: 1 2 3
  console.log("Size:", list.getSize()); // Output: Size: 3
  
  