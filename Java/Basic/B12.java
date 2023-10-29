// Find average of numbers in an array

public class B12 {
    public static void main(String... args){
        int arr[] = {1, 3, 5, 7, 9, 8, 6, 4, 2, 10};

        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum = sum + arr[i];
        }        
        float average = (float)sum / arr.length;
        System.out.println(average);
    }
}
