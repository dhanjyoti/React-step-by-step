// 10. Take user input for a number and print its factorial.
import java.util.*;

public class bop10 {
    public static int factorial(int n){
        if(n==0 || n==1){
            return 1;
        } else {
            return n = n * factorial(n - 1);
        }
    }
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        System.out.println(factorial(number));
        
        sc.close();
    } 
}