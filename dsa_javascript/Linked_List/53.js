//  Circular Linked List


// Define the Node class to represent each element in the circular linked list
class Node {
    constructor(data) {
      this.data = data; // Data stored in the node
      this.next = null; // Pointer to the next node, initially null
    }
  }
  
  // Define the CircularLinkedList class
  class CircularLinkedList {
    constructor() {
      this.head = null; // Points to the head of the list, initially null
      this.size = 0; // Size of the list, initially 0
    }
  
    // Method to insert a new node at the end of the list
    append(data) {
      const newNode = new Node(data); // Create a new node with the given data
  
      // If the list is empty, make the new node the head and point it to itself
      if (!this.head) {
        this.head = newNode;
        newNode.next = newNode;
      } else {
        // Find the last node in the list
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        // Append the new node to the end of the list
        current.next = newNode;
        newNode.next = this.head;
      }
      this.size++; // Increment the size of the list
    }
  
    // Method to print the elements of the list
    print() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  
    // Method to get the size of the list
    getSize() {
      return this.size;
    }
  }
  
  // Example usage:
  const list = new CircularLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.print(); // Output: 1 2 3
  console.log("Size:", list.getSize()); // Output: Size: 3
  
