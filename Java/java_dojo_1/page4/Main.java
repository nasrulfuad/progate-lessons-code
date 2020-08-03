import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("First name: ");
    

    String firstName = scanner.next();
    
    System.out.println("Last name: ");
    
    String lastName = scanner.next();

    System.out.println("My name is "+ firstName + lastName + ".");
  }
}
