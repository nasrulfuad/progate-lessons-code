class Main {
  public static void main(String[] args) {
    Person person1 = new Person();
    person1.hello();
    
    // Set the name instance field of person1 to the value "Kate Jones"
    person1.name = "Kate Jones";
    
    // Print the name instance field of the person1 instance 
    System.out.println(person1.name);

    Person person2 = new Person();
    person2.hello();
    
    // Set the name instance field of person2 to the value "John Christopher Smith"
    person2.name = "John Christopher Smith";
    
    // Print the name instance field of the person2 instance
    System.out.println(person2.name);
    
  }
}
