//      2. Find the sum of all elements in an array.
import java.util.*;

public class array2 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int arr[] = new int[number];

        for(int i=0; i<arr.length; i++){
            arr[i] = sc.nextInt();
        }

        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum = sum + arr[i];
        }
        System.out.println(sum);
        sc.close();
    }
}
