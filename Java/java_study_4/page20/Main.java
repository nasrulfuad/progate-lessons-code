class Main {
  public static void main(String[] args) {
    Person person1 = new Person("Kate", "Jones", 27, 1.6, 50.0);
    person1.printData();
    Person person2 = new Person("John", "Christopher", "Smith", 65, 1.75, 80.0);
    person2.printData();
    
    System.out.println("----------------------");
    // Set the middleName of person1 to "Claire"
    person1.setMiddleName("Claire");
    
    System.out.println("Changed the middle name to " + person1.getMiddleName() + ".");
    person1.printData();
  }
}
