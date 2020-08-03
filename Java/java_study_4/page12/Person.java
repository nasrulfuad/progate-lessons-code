class Person {
  public String firstName;
  public String lastName;
  public int age;
  public double height;
  public double weight;

  Person(String firstName, String lastName, int age, double height, double weight) {
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
  
  // Define the printData instance method
  public void printData() {
    double bmi = this.bmi();
    System.out.println("My name is "+ this.fullName() +".");
    System.out.println("I am "+ this.age +" years old.");
    System.out.println("My BMI is "+ Math.round(this.bmi()) +".");
  }
  
}
