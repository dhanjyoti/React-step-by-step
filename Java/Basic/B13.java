/*
    Q. You are given an integer N. You have to determine if it is positive, negative, or zero. 
        Print "The number is positive" if the number is greater than zero. Else, if the number 
        is negative, print "The number is negative". Print "The number is zero" if the given 
        number is 0.
 */

public class B13 {
    public static void printSign(int n){
        if(n>0){
            System.out.println("The number is positive!");
        } else if(n<0){
            System.out.println("The number is negative");
        } else {
            System.out.println("The number is zero");
        }
    }
    public static void main(String... args){
        int n = -78;

        printSign(n);
    }
}
