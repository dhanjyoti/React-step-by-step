//  ⁠Convert a String "Hello" to a LinkedList and then print that Linkedlist. H->E->L->L->O

let string = "Hello";

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
    append(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let  current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        let result = '';
        while(current){
            result += current.data + (current.next ? '->' : '');
            current = current.next;
        }
        console.log(result);
    }
}
function stringtoLinkedList(str){
    const linkedlist = new LinkedList();
    for(let char of str){
        linkedlist.append(char);
    }
    return linkedlist;
}
const linkedlist = stringtoLinkedList(string);
linkedlist.print();