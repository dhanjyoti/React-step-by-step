//  13. Print a pattern of numbers in a pyramid shape.

public class bop13 {
    public static void main(String... args){
    int n = 5;

        for(int i=1; i<=n; i++){
            // Print spaces
            for(int j=1; j<=n-i; j++){
                System.out.print(" ");
            }

            // Print asterisks
            for(int k=1; k<=i; k++){
                System.out.print("*");
            }

            for(int l=1; l<=i; l++){
                System.out.print("*");
            }

            System.out.println();
        }
    }    
}
