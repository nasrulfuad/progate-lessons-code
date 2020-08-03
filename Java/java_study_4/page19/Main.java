class Main {
  public static void main(String[] args) {
    Person person1 = new Person("Kate", "Jones", 27, 1.6, 50.0);
    person1.printData();
    Person person2 = new Person("John", "Christopher", "Smith", 65, 1.75, 80.0);
    person2.printData();
    
    System.out.println("----------------------");
    // Call the getMiddleName instance method using the person2 instance
    // and output "The middle name of person2 is ____."
    System.out.println("The middle name of person2 is " + person2.getMiddleName() + ".");
    
  }
}
