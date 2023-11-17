// 8. Take user input for a number and check if it's even or odd.
import java.util.Scanner;

public class bop8 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();

        if(number % 2 == 0){
            System.out.println("Number is even!");
        } else {
            System.out.println("Number is odd!");
        }
        sc.close();
    }
}
