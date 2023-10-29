/*
    Data type -> Data types in programming define the kind of data a variable can hold,
    such as numbers, text, or objects. They ensure data integrity and guide how 
    operations can be performed on that data. Common data types include integers, strings
    and booleans.

    #3-> What is linked list?
    Ans-> A linked list is a linear data structure used to store and manage a
    collection of elements. Each element(node) points to the next one, forming
    a sequence. It allows for efficient insertion and deletion but requires
    sequential access for searching.
 */

// Right angled triangle pattern

public class B3 {
    public static void main(String... args){
        int a = 5;
        for(int i=1; i<=a; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println(" ");
        }
    }
}
