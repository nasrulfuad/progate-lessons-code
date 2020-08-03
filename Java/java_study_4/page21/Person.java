class Person {
  private static int count = 0;
  private String firstName;
  private String middleName;
  private String lastName;
  private int age;
  private double height, weight;
  // Declare the job instance field
  private String job;
  
  // Edit the constructor
  Person(String firstName, String lastName, int age, double height, double weight, String job) {
    Person.count++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.job = job;
  }
  
  // Edit the constructor and this()
  Person(String firstName, String middleName, String lastName, int age, double height, double weight, String job) {
    this(firstName, lastName, age, height, weight, job);
    this.middleName = middleName;
  }

  public String getMiddleName() {
    return this.middleName;
  }
  
  // Define the getter for job instance field
  public String getJob() {
    return this.job;
  }


  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }
  
  // Define the setter for job instance field
  public void setJob(String job) {
    this.job = job;
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
    System.out.println("My BMI is " + Math.round(this.bmi()) + ".");
    // Print "I am a ____."
    System.out.println("I am a "+ this.job +".");
    
  }

  public double bmi() {
    return this.weight / this.height / this.height;
  }

  public static void printCount() {
    System.out.println("Total: " + Person.count + " people.");
  }
}
