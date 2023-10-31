//      6. Find the smallest element in an array.

public class array6 {
    public static void main(String... args){
        int array[] = {34, 9, 12, 24, 54, 22, 15, 7, 26, 17};

        int smallest = array[0];
        for(int i=0; i<array.length; i++){
            if(array[i]<smallest){
                smallest = array[i];
            }
        }
        System.out.println("The smallest number is: " + smallest);
    }
}