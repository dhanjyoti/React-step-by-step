//      9. Check if an array is sorted in ascending order.

public class array9 {
    public static boolean isAscendingSorted(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false; // If any element is greater than the next one, it's not sorted
            }
        }
        return true;
    }
    public static void main(String[] args) {
        int[] arr = {11, 22, 25, 34, 64, 90};

        boolean isSorted = isAscendingSorted(arr);

        if (isSorted) {
            System.out.println("The array is sorted in ascending order.");
        } else {
            System.out.println("The array is not sorted in ascending order.");
        }
    }

}
