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
    
    // Assign BMI to the bmi variable using the bmi method
    double bmi = bmi(height, weight);
    
    // Using the bmi variable, print out "My BMI is ____."
    System.out.println("My BMI is "+ bmi +".");
    
  }

  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }
  
  public static String fullName(String firstName, String middleName, String lastName) {
    return firstName + " " + middleName + " " + lastName;
  }
  
  // Define the bmi method
  public static double bmi(double height, double weight) {
    return weight / height / height;
  }
  
}
