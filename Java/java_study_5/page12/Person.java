class Person {
  private String firstName;
  private String middleName;
  private String lastName;
  private int age;
  private double height;
  private double weight;

  Person(String firstName, String lastName, int age, double height, double weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  Person(String firstName, String middleName, String lastName, int age, double height, double weight) {
    this(firstName, lastName, age, height, weight);
    this.middleName = middleName;
  }
  
  public String fullName() {
    if (this.middleName == null) {
      return this.firstName + " " + this.lastName;
    } else {
      return this.firstName + " " + this.middleName + " " + this.lastName;
    }
  }

  public void printData() {
    System.out.println("My name is " + this.fullName() + ".");
    System.out.println("I am " + this.age + " years old.");
    System.out.println("I am " + this.height + "m tall.");
    System.out.println("I weigh " + this.weight + "kg.");
    System.out.println("My BMI is " + Math.round(this.bmi()) + ".");
  }

  public double bmi() {
    return this.weight / this.height / this.height;
  }
  
  // Combine the two methods below into a single method
  public void buy(Vehicle vehicle) {
    vehicle.setOwner(this);
  }
}
