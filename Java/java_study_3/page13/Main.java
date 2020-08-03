import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("First Name: ");
    // Input a string value
    String firstName = scanner.next();
    
    System.out.print("Last Name: ");
    // Input a string value
    String lastName = scanner.next();
    
    System.out.print("Age: ");
    // Input an integer value
    int age = scanner.nextInt();
    
    System.out.print("Height (m): ");

    double height = scanner.nextDouble();
    
    System.out.print("Weight (kg): ");

    double weight = scanner.nextDouble();
    
    Person.printData(Person.fullName(firstName, lastName), age, height, weight);
  }
}


