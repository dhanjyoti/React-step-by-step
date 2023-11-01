/* Q. 6. Describe the concept of a queue.

Ans-> A queue is a linear data structure in computer science that follows the 
    First-In-First-Out(FIFO) principle. It works similar to a real-world queue, like people 
    waiting in a line at a grocery store. In queue, elements are added at one end(the 'rear' 
    or 'enqueue' operation). The element that has been in the queue the longest is the first 
    to be removed. Queues are used for various applications, such as managing tasks in a print
    spooler, scheduling processes in an operating system, and more. They are essential in
    scnerios where we need to maintain order and process elements sequentially.
 */

// Print all even indexes

public class B6 {
    public static void main(String... args){
        int arr[] = {1, 4, 6, 3, 9, 15, 11, 7};

        for(int i=0; i<arr.length; i++){
            if(i % 2 == 0){
                System.out.print(arr[i] + " ");
            }
        }
    }
}
