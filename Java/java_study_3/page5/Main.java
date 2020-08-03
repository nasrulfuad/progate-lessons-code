class Main {
  public static void main(String[] args) {
    // Assign the result of the fullName method to the name variable
    String name = fullName("Kate", "Jones");
    
    // Replace the first argument of printData
    printData(name, 27);
    
    // Leave these arguments as they are
    printData("John Christopher Smith", 65);
    
  }

  public static void printData(String name, int age) {
    System.out.println("My name is " + name + ".");
    System.out.println("I am " + age + " years old.");
  }

  // Define the fullName method
  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }
  
}
