// Import the Math class from java.lang.Math
import java.lang.Math;

class Person {
  public static void printData(String name, int age, double height, double weight) {
    System.out.println("My name is " + name + ".");
    System.out.println("I am " + age + " years old.");
    System.out.println("My height is " + height + " meters.");
    System.out.println("My weight is " + weight + " kilograms.");
    double bmi = bmi(height, weight);
    // Output the rounded BMI using the round method from the Math class
    System.out.println("My BMI is " + Math.round(bmi) + ".");

    if (isHealthy(bmi)) {
      System.out.println("Your BMI is in the standard range.");
    } else {
      System.out.println("Your BMI is outside of the standard range.");
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
  
  public static boolean isHealthy(double bmi) {
    return bmi >= 18.5 && bmi < 25.0;
  }
}
