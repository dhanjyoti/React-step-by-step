// 5. Calculate and print the area of a rectangle given its length and width.
import java.util.*;

public class bop5 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int width = sc.nextInt();

        int area_of_rectangle = length * width;
        System.out.println(area_of_rectangle);
        sc.close();
    }
}
