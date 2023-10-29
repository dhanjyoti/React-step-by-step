// Sum of all even numbers from an array
public class B8 {
    public static void main(String... args){
        int arr[] = {1, 7, 6, 8, 12, 9, 11, 12};

        int sum = 0;
        for(int i=0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                sum = sum + arr[i];
            }
        }
        System.out.println(sum);
    }
}
