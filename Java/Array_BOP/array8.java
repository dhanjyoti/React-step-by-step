//      8. Count the number of odd elements in an array.

public class array8 {
    public static void main(String... args){
        int array[] = {34, 9, 12, 24, 54, 22, 15, 7, 26, 17};    
        
        for(int i=0; i<array.length; i++){
            if(array[i]%2==1){
                System.out.print(array[i] + " ");
            }
        }
    }
}
