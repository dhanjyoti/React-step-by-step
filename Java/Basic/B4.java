/*
    Statement-> A statement is a complete instruction that the Java compiler can understand 
    and execute. Statements are the building blocks of Java programs, and they define the 
    actions or operations that the program should perform. 
                Eg- Expression Statements, Declaration Statements, Control Flow Statements, 
            Block Statement, Empty Statement, Try-Catch Statements.

    #4-> Explain the difference between an array and a linked list.
    Ans-> 
    ## Memory Allocation:
        1. Arrays are allocated a fixed, contiguous block of memory at the time of creation,
        making them efficient for direct access using indices.
        2. Linked lists, on the other hand, use dynamic memory allocation and consist of 
        nodes with data and references, allowing for efficient insertion and deletion of
        elements, but they don't offer constant-time random access like arrays.
    ## Size Flexibility:
        1. Arrays have a fixed size determined at the time of creation. To accommodate
        more elements, we often need to create a new array and copy elements from the
        old array.
        2. Linked lists can dynamically grow or shrink by adding or removing nodes.
        They adapt to the number of elements in real-time without requiring a new 
        allocation.
    ## Insertion and Deletion:
        1. Inserting or deleting elements in an array, especially in the middle or the
        beginning, can be slow and may require shifting other elements.
        2. Linked lists excel at insertions and deletions since you can change references
        to add or remove elements without shifting the entire structure, making them more 
        efficient for such operations.
 */

// Right angled trinagle pattern of numbers

public class B4 {
    public static void main(String... args) {
        int n = 5;
        int num = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                num++;
                System.out.print(num + " ");
            }
            System.out.println(" ");
        }
    }
}
