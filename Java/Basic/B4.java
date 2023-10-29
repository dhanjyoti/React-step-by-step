/*
    Statement-> A statement is a complete instruction that the Java compiler can understand 
    and execute. Statements are the building blocks of Java programs, and they define the 
    actions or operations that the program should perform. 
                Eg- Expression Statements, Declaration Statements, Control Flow Statements, 
            Block Statement, Empty Statement, Try-Catch Statements
 */

// Right angled trinagle pattern of numbers

public class B4 {
    public static void main(String... args) {
        int n = 5;
        int num = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                num++;
                System.out.print(num + " ");
            }
            System.out.println(" ");
        }
    }
}
