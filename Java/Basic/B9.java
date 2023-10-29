/* 
1. time complexity of iteration in an array in Big-O of n(array.length)
2. time complexity of 2D array is Big-O of n2
3. array.sort n log n(shortest time complexity)
4. divide and conquare(Big-O of n log n)
*/

// Find maximum number in an Array(used in Bubble, Insertion and Selection)
public class B9 {
    public static void main(String... args){
        int arr[] = {2, 4, 8, 9, 6, 5, 7, 1, 3};

        int max = arr[0];
        for(int i=0; i<arr.length; i++){
            if(max<arr[i]){
                max = arr[i];
            }
        }
        System.out.println("The largest number in an array is " + max);
    }
}
