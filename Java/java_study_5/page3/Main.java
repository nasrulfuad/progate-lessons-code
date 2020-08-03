class Main {
  public static void main(String[] args) {
    Car car = new Car();
    // Set the name of car to "Ferrari" using the setName method
    car.setName("Ferrari");
    
    // Set the color of car to "Red" using the setColor method
    car.setColor("Red");

    Bicycle bicycle = new Bicycle();
    // Set the name of bicycle to "Bianchi" using the setName method
    bicycle.setName("Bianchi");
    
    // Set the color of bicycle to "Green" using the setColor method
    bicycle.setColor("Green");
    
    System.out.println("【Car Info】");
    car.printData();

    System.out.println("=================");
    System.out.println("【Bicycle Info】");
    bicycle.printData();
  }
}
