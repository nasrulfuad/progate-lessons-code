class Main {
  public static void main(String[] args) {
    Person person1 = new Person("Kate", "Jones", 27, 1.6, 50.0);
    Person person2 = new Person("John", "Christopher", "Smith", 65, 1.75, 80.0);

    Car car = new Car("Ferrari", "Red");
    Bicycle bicycle = new Bicycle("Bianchi", "Green");
    
    person1.buy(car);
    
    person2.buy(bicycle);

    System.out.println("【Car Info】");
    car.printData();
    System.out.println("-----------------");
    System.out.println("【Car Owner Info】");
    car.getOwner().printData();

    System.out.println("=================");
    System.out.println("【Bicycle Info】");
    bicycle.printData();
    System.out.println("-----------------");
    System.out.println("【Bicycle Owner Info】");
    bicycle.getOwner().printData();
  }
}
