//      3. Find the product of all elements in an array.
import java.util.*;

public class array3 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int arr[] = new int[number];

        for(int i=0; i<arr.length; i++){
            arr[i] = sc.nextInt();
        }

        int product = 1;
        for(int i=0; i<arr.length; i++){
            product = product * arr[i];
        } 
        System.out.println(product);

        sc.close();
    }
}
