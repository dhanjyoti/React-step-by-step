//  12. Print a pattern of stars in the shape of a right-angled triangle.

public class bop12 {
    public static void main(String... args){
        int n = 5;

        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println(" ");
        }
    }
}
