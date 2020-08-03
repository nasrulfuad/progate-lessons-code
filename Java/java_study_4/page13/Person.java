class Person {
  // Declare the count class field as an int type and assign it the value 0
  public static int count = 0;
  
  public String firstName;
  public String lastName;
  public int age;
  public double height, weight;

  Person(String firstName, String lastName, int age, double height, double weight) {
    // Increment the count variable by 1
    this.count += 1;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  public String fullName() {
    return this.firstName + " " + this.lastName;
  }

  public double bmi() {
    return this.weight / this.height / this.height;
  }
  
  public void printData() {
    System.out.println("My name is " + this.fullName() + ".");
    System.out.println("I am " + this.age + " years old.");
    System.out.println("My BMI is " + Math.round(this.bmi()) + ".");
  }
}
