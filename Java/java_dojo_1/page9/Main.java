import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Number of people: ");
    int total = scanner.nextInt();

    for(int number = 1; number <= total; number++){
      System.out.println("Person number " + number);
      System.out.print("First name: ");
  
      String firstName = scanner.next();
      
      System.out.print("Last name: ");
  
      String lastName = scanner.next();
      
      System.out.print("Age: ");
  
      int age = scanner.nextInt();
      
      System.out.print("Height (m): ");
  
      double height = scanner.nextDouble();
      
      System.out.print("Weight (kg): ");
  
      double weight = scanner.nextDouble();
      
      Person.printData(firstName, lastName, age, height, weight); 
    }
  }
}
