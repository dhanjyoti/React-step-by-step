// 2. Take user input for their name and print a personalized greeting.
import java.util.*;

public class bop2 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();

        System.out.println("The name is " + name);
        sc.close();
    }
}
