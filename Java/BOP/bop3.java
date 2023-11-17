// 3. Calculate and print the sum of two numbers entered by the user.
import java.util.*;

public class bop3 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number1 = sc.nextInt();
        int number2 = sc.nextInt();

        System.out.println(number1 + number2);
        sc.close();
    }
}
