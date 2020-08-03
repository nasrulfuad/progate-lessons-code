class Main {
  public static void main(String[] args) {
    printData(fullName("Kate", "Jones"), 27, 1.6, 50.0);
    printData(fullName("John", "Christopher", "Smith"), 65, 1.75, 80.0);
  }

  public static void printData(String name, int age, double height, double weight) {
    System.out.println("My name is " + name + ".");
    System.out.println("I am " + age + " years old.");
    System.out.println("My height is " + height + " meters.");
    System.out.println("My weight is " + weight + " kilograms.");
    double bmi = bmi(height, weight);
    System.out.println("My BMI is " + bmi + ".");
    
    // Make an if statement to determine the result of the isHealthy method
    if(isHealthy(bmi)) {
      System.out.println("You are healthy!");
    } else {
      System.out.println("You are not healthy.");
    }
    
  }

  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }

  public static String fullName(String firstName, String middleName, String lastName) {
    return firstName + " " + middleName + " " + lastName;
  }

  public static double bmi(double height, double weight) {
    return weight / height / height;
  }

  // Define the isHealthy method
  public static boolean isHealthy(double bmi) {
    return bmi >= 18.5 && bmi < 25.0;
  }
  
}
