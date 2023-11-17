/* Q 7. Explain the difference between a stack and a queue.

Ans-> A stack and a queue are both fundamental data structures used in computer science to 
manage and manipulate collections of data, but they operate based on different principles.

1. Stack:
    * Follows the Last-In-First-Out(LIFO) principle, meaning the last element added is the 
        first one to be removed.
    * Operations:'push' to add elements and 'pop' to remove elements. The top element is the
        one accessible.
    * Useful for tracking function calls, implementing undo/redo functionality, and 
        maintaining a history of actions.

2. Queue:
    * Follows the First-In-First-Out(FIFO) principle, meaning the first element added is the
        first one to be removed.
    * Operations:'enqueue' to add elements and 'dequeue' to remove elements. The front 
        element is the one accessible.
    * Useful for managing tasks in a print spooler, scheduling processes in an operating
        system, and handling requests in a web server.

                    In summary, the key difference between a stack and a queue is the order
    in which elements are removed. In a stack, the last element added is the first to be
    removed. The choice between them depends on the specific requirements of the application 
    or problem we are solving. 
 */

// print all even numbers in an array

public class B7 {
    public static void main(String... args){
        int n[] = {1, 7, 6, 8, 12, 9, 11, 12};

        for(int i=0; i<n.length; i++){
            if(n[i] % 2 == 0){
                System.out.print(n[i] + " ");
            }
        }
    }
}
