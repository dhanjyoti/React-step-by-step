// Print all even indexes

public class B6 {
    public static void main(String... args){
        int arr[] = {1, 4, 6, 3, 9, 15, 11, 7};

        for(int i=0; i<arr.length; i++){
            if(i % 2 == 0){
                System.out.print(arr[i] + " ");
            }
        }
    }
}
