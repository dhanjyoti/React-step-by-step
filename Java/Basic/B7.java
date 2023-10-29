// print all even numbers in an array

public class B7 {
    public static void main(String... args){
        int n[] = {1, 7, 6, 8, 12, 9, 11, 12};

        for(int i=0; i<n.length; i++){
            if(n[i] % 2 == 0){
                System.out.print(n[i] + " ");
            }
        }
    }
}
