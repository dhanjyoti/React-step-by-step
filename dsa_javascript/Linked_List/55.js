//  Convert a string to a linked list and print the start, middle and end elements fromit

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
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        let result = '';
        let start = '';
        let end = '';
        while(current){
            result += current.data + (current.next ? '->':'');
            if(!start){
                start = current.data;
            }
            end = current.data;
            current = current.next;
        }
        console.log("start element: ", start);
        console.log("end element: ", end);
        console.log("middle element: ", this.printMiddle().data);
        console.log("Fulllinked list: ",result);
    }   
    printMiddle(){
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
function stringToLinkedList(str){
    const linkedlist = new LinkedList();
    for(let char of str){
        linkedlist.append(char);
    }
    return linkedlist;
}
const string = "hello";
const linkedlist = stringToLinkedList(string);
linkedlist.print();
linkedlist.printMiddle();


