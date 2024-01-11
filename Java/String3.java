// Java Program to Swap Two Numberes

import java.util.Scanner;

public class String3{
    static void swapNumberValues(int m, int n){
        // Swapping the values
        int temp = m;
        m = n;
        n = temp;
        System.out.println("Value of m is: " + m +" and Value of n is: " + n);
    }
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        swapNumberValues(m, n);
    }
}