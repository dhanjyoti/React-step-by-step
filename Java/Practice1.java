import java.util.*;

public class Practice1{
   public static void printSign(int n){
      if(n>0){
         System.out.println("positive");
      } else if(n<0){
         System.out.println("negative");
      } else {
         System.out.println("number is zero");
      }
   }
 public static void main(String... args){
   int n = 34;
   printSign(n);
 }
}