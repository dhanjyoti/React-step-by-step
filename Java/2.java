// Program to print Multiplication of two floating point Number.

import java.io.*;
import java.util.*;

class FloatingNumber{
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        float f1 = sc.nextFloat();
        float f2 = sc.nextFloat();

        float p = f1 * f2;

        System.out.println("The product is: " + p);
    }
}