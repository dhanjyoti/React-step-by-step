// Find target element
public class B10 {
    public static void main(String... args){
        int arr[] = {1, 3, 5, 45, 34, 23, 8, 81};

        int target = 34;
        for(int i=0; i<arr.length; i++){
            if(arr[i] == target){
                System.out.println(target);
            }
        }
    }
}
