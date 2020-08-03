class Main {
  public static void main(String[] args) {
    Person person1 = new Person("Kate", "Jones", 27, 1.6, 50.0);
    Person person2 = new Person("John", "Christopher", "Smith", 65, 1.75, 80.0);

    Car car = new Car("Ferrari", "Red");
    // Set the owner of car to person1 using the setOwner instance method
    car.setOwner(person1);
    
    Bicycle bicycle = new Bicycle("Bianchi", "Green");
    // Set the owner of bicycle to person2 using the setOwner instance method 
    bicycle.setOwner(person2);

    System.out.println("【Car Info】");
    car.printData();
    System.out.println("-----------------");
    System.out.println("【Car Owner Info】");
    // Get the owner of car using the getOwner instance method,
    // and use printData to print the owner information
    car.getOwner().printData();

    System.out.println("=================");
    System.out.println("【Bicycle Info】");
    bicycle.printData();
    System.out.println("-----------------");
    System.out.println("【Bicycle Owner Info】");
    // Get the owner of bicycle using the getOwner instance method,
    // and use printData to print the owner information
    bicycle.getOwner().printData();
    
  }
}
