/*
    #5 What is a stack and how is it implemented?
    Ans-> A stack is a linear data structure that follows the Last-In, First-Out(LIFO)
    principle, where the last element added to the stack is the first one to be removed.
    It's similar to a stack of plates, where you add and remove plates from the top.
    Stacks are typically used for managing function calls, tracking execution context,
    and solving problems involving nested or sequential operations.
                Stacks can be implemented using arrays or linked lists.
            In an array-based implementation, we use an array to store elements and a
    pointer(usually called 'top') to keep track of the current top element. 
            In a linked list implementation, we create a linked list of nodes, and each 
    node points to the next one. To push an element onto the stach, we add it to the top 
    of the array or linked list; to pop an element, we remove it from the top.

 */

// Print all indexes in an array taken from the user
import java.util.*;

public class B5 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        for(int i=0; i<n; i++){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}
