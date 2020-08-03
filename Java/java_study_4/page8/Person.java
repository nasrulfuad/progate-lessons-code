class Person {
  public String name;

  // Allow the constructor to take a String type argument
  Person(String name) {
    System.out.println("Created an instance of the Person class.");
    // Set the instance field name using the value of the argument
    this.name = name;
    
  }

  public void hello() {
    System.out.println("Hello, my name is " + this.name + ".");
  }
}
