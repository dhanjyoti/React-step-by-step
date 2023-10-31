//      9. Check if an array is sorted in ascending order.

public class array9 {
    public static boolean sortedAscending(int[] arr){
        for(int i=0; i<arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                return false;
            }
        }
        return true;
    }
    public static void main(String... args){
        int number[] = {2, 3, 4, 6, 7, 8, 9, 12, 22};

        boolean isSorted = sortedAscending(number);

        if(isSorted){
            System.out.println("The array is sorted in Ascending!");
        } else {
            System.out.println("The array is not Ascending!");
        }
    }
}
