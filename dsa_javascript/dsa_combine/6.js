// Merged lists in a sorted order where every element is greater than the previous element.

// Input: K = 3, N = 3

// list1 = 1->3->7->NULL

// list2 = 2->4->8->NULL

// list3 = 9->10->11->NULL

// Output: 1->2->3->4->7->8->9->10->11

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge K sorted linked lists
function mergeKLists(lists) {
    let merged = new ListNode(); // Dummy node for the merged list
    let tail = merged; // Pointer to the tail of the merged list

    while (true) {
        let minNode = null; // Pointer to the node with the minimum value among current heads of lists
        let minIndex = -1; // Index of the list containing the minimum node

        // Find the list with the minimum head value
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (!minNode || lists[i].val < minNode.val)) {
                minNode = lists[i];
                minIndex = i;
            }
        }

        // If there is no more minimum node, break the loop
        if (!minNode) break;

        // Move the tail to the minimum node and move the list head pointer forward
        tail.next = minNode;
        tail = tail.next;
        lists[minIndex] = lists[minIndex].next;
    }

    return merged.next; // Skip the dummy node and return the merged list
}

// Example usage:
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(7);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(8);

let list3 = new ListNode(9);
list3.next = new ListNode(10);
list3.next.next = new ListNode(11);

let lists = [list1, list2, list3];

let mergedList = mergeKLists(lists);
let result = [];
while (mergedList) {
    result.push(mergedList.val);
    mergedList = mergedList.next;
}

console.log(result); // Output: [1, 2, 3, 4, 7, 8, 9, 10, 11]
