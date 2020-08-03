import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Number of people: ");
    int n = scanner.nextInt();
    
    int maxAge = 0;
    int ageSum = 0;
    
    for (int i = 0; i < n; i++) {
      System.out.println("Person number " + (i + 1));
      
      System.out.print("First name: ");
      String firstName = scanner.next();
      
      System.out.print("Last name: ");
      String lastName = scanner.next();
      
      System.out.print("Age: ");
      int age = scanner.nextInt();
      
      if (age > maxAge) {
        maxAge = age;
      }
      
      ageSum += age;
      
      System.out.print("Height (m): ");
      double height = scanner.nextDouble();
      
      System.out.print("Weight (kg): ");
      double weight = scanner.nextDouble();
      
      Person.printData(firstName, lastName, age, height, weight);
    }
    
    System.out.println("Age of eldest person: " + maxAge + ".");
    System.out.println("Average age: " + ageSum / n + ".");
  }
}
