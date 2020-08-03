class Person {
  public static void printData(String firstName, String lastName, int age, double height, double weight) {
    System.out.println("My name is " + Person.fullName(firstName, lastName) + ".");
    System.out.println("I'm " + age + " years old.");
    if (age >= 20) {
      System.out.println("I'm an adult.");
    } else {
      System.out.println("I'm not yet an adult.");
    }
    System.out.println("My height is " + height + " meters.");
    System.out.println("My weight is " + weight + "kgs.");
    double bmi = bmi(height, weight);
    System.out.println("My BMI is " + Math.round(bmi) + ".");
    if (isHealthy(bmi)) {
      System.out.println("Result: You are healthy!");
    } else {
      System.out.println("Result: You are not healthy.");
    }
  }
  
  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }
  
  public static double bmi(double height, double weight) {
    return weight / height / height;
  }

  public static boolean isHealthy(double bmi) {
    return bmi >= 18.5 && bmi < 25.0;
  }
}