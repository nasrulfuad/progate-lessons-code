class Person {
  public static void printData(String name, int age, double height, double weight) {
    System.out.println("My name is "+ name +".");
    System.out.println("I am "+ age +" years old.");
    if(age > 18) {
      System.out.println("I am an adult.");
    }else{
      System.out.println("I am not an adult.");
    }
    System.out.println("My height is " + height + " tall.");
    System.out.println("My weight is " + weight + "kg.");
  }
  
  public static String fullName(String firstName, String lastName) {
    return firstName + " " + lastName;
  }
}