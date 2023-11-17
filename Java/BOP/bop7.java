// 7. Calculate and print the average of three numbers.
import java.util.Scanner;

public class bop7 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int no1 = sc.nextInt();        
        int no2 = sc.nextInt();
        int no3 = sc.nextInt();

        int average = (no1 + no2 + no3) / 3;
        System.out.println(average);
        
        sc.close();
    }
}
