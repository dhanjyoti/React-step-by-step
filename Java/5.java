// Java Program to Check if Given Integer is Odd or Even

import java.util.*;

class OddEven {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        if(number % 2 == 0){
            System.out.print("Even Number");
        } else {
            System.out.print("Odd Number");
        }
    }
}