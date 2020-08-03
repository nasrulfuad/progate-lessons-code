// Import the Scanner class from java.util.Scanner
import java.util.Scanner;

class Main {
  public static void main (String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Name: ");
    
    // Declare the name variable of type String to take an input value from the console
    String name = scanner.next();
    
    // Print out "Hello, ____."
    System.out.println("Hello, "+ name +".");
  }
}