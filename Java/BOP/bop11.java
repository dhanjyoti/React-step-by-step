//  11. Print the numbers from 1 to 10.
import java.util.*;

public class bop11 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int arr[] = new int[number];

        for(int i=0; i<arr.length; i++){
            arr[i] = sc.nextInt();
        }

        for(int i=0; i<arr.length; i++){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}
