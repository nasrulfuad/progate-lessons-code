class Person {
  public static int count = 0;
  public String firstName, lastName;
  public int age;
  public double height, weight;

  Person(String firstName, String lastName, int age, double height, double weight) {
    Person.count++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  public String fullName() {
    return this.firstName + " " + this.lastName;
  }

  public void printData() {
    System.out.println("My name is " + this.fullName() + ".");
    System.out.println("I am " + this.age + " years old.");
    System.out.println("My BMI is " + Math.round(this.bmi()) + ".");
  }

  public double bmi() {
    return this.weight / this.height / this.height;
  }

  // Define the printCount class method
  public static void printCount() {
    System.out.println("Total: "+ Person.count +" people.");
  }
  
}
