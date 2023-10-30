//      5. Find the largest element in an array.

public class array5 {
    public static void main(String... args){
        int arr[] = {4, 7, 5, 8, 9, 20, 18, 13};

        int largest = arr[0];
        for(int i=0; i<arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        System.out.println("The largest number is: " + largest);
    }
}
