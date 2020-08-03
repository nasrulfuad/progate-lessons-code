class Main {
  public static void main(String[] args) {
    // Add an argument for each person’s age
    printData("Kate Jones", 27);
    printData("John Christopher Smith", 65);
  }

  // Edit the method to accept an argument for age
  public static void printData(String name, int age) {
    System.out.println("My name is " + name + ".");
    // Output "I am ____ years old."
    System.out.println("I am "+ age +" years old.");
    
  }
}
