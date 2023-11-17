// 6. Convert temperature from Celsius to Fahrenheit and vice versa, based on user input.
import java.util.Scanner;

public class bop6 {
    public static void main(String... args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Choose an option:");
        System.out.println("1. Convert from Celsius to Fahrenheit");        
        System.out.println("2. Convert from Fahrenheit to Celsius");

        int choice = sc.nextInt();

        if(choice == 1){
            System.out.println("Enter temperature in Celsius: ");
            double celsius = sc.nextDouble();
            double fahrenheit = (celsius * 9/5) + 32;
            System.out.println(celsius + "°C is equivalent to " + fahrenheit + "°F");
        } else if(choice == 2){
            System.out.println("Enter temperature in Fahrenheit: ");
            double fahrenheit = sc.nextDouble();
            double celsius = (fahrenheit - 32) * 5/9;
            System.out.println(fahrenheit + "°F is equivalent to " + celsius + "°C");
        } else {
            System.out.println("Invalid choice. Please select option 1 or 2.");
        }
        sc.close();
    }
}
