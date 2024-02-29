
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  
    Push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
      return this;
    }
  
    Pop() {
      let temp = this.head;
      let prev = this.head;
      if (!this.head) {
        return undefined;
      }
  
      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }
  
      this.tail = prev;
      this.tail.next = null;
      this.length--;
  
      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
  
      return temp;
    }
  
    Unshift(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length++;
  
      return this;
    }
  
    Shift() {
      if (!this.head) {
        return undefined;
      }
  
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
  
      if (this.length == 0) {
        this.tail = null;
      }
  
      temp.next = null;
      return temp;
    }
  
    Get(index) {
      if (index < 0 || index <= this.length) {
        return undefined;
      }
      let temp = this.head;
      for (let i = 1; i < index; i++) {
        temp = temp.next;
      }
  
      return temp;
    }
  
    Set(index, value) {
      let get = this.Get(index);
  
      if (get) {
        get.value = value;
        return true;
      }
  
      return false;
    }
  
    Insert(index, value) {
      if (index === 0) return this.Unshift(value);
      if (index === this.length) return this.Push(value);
      if (index < 0 || index > this.length) return false;
  
      const newNode = new Node(value);
      const temp = this.Get(index - 1);
  
      newNode.next = temp.next;
      temp.next = newNode;
  
      this.length++;
  
      return true;
    }
  
    Remove(index) {
      if (index === 0) return this.Shift();
      if (index === this.length) return this.Pop();
      if (index < 0 || index >= this.length) return undefined;
  
      const before = this.Get(index - 1);
      const temp = before.next;
  
      before.next = temp.next;
      temp.next = null;
  
      this.length--;
      return temp;
    }
  
    Reverse() {
      if (!this.head) return undefined;
  
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let prev = null;
      let next = temp.next;
  
      for (let i = 0; i < this.length; i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
      }
  
      return this;
    }
  }
  
  let linklist = new LinkedList(1);
  
  linklist.Push(3);
  linklist.Push(5);
  linklist.Push(8);
  linklist.Push(10);
  linklist.Push(15);
  
  // linklist.Shift();
  // linklist.Unshift(2);
  // linklist.Get(1);
  // linklist.Set(2, 2);
  // linklist.Insert(1,3);
  // linklist.Remove(3);
  // linklist.Reverse();
  
  console.log(linklist);
  
  
  
  