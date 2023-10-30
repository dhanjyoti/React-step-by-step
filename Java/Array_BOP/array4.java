//      4. Calculate the average of elements in an array.
import java.util.*;

public class array4 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];

        for(int i=0; i<arr.length; i++){
            arr[i] = sc.nextInt();
        }

        int sum = 0; 
        for(int i=0; i<arr.length; i++){
            sum = sum + arr[i];
        }
        float average = (float)sum / arr.length;
        System.out.println(average);

        sc.close();
    }
}
