import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Car car = new Car();
    car.setName("Ferrari");
    car.setColor("Red");
    Bicycle bicycle = new Bicycle();
    bicycle.setName("Bianchi");
    bicycle.setColor("Green");

    System.out.println("【Car Info】");
    car.printData();
    // Output "Fuel: ____L" using the getFuel instance method
    System.out.println("Fuel: " + car.getFuel() + "L");
    
    System.out.println("-----------------");
    System.out.print("Enter refuel amount：");
    int litre = scanner.nextInt();
    // Call the charge instance method and pass litre as an argument
    car.charge(litre);

    System.out.println("=================");
    System.out.println("【Bicycle Info】");
    bicycle.printData();
  }
}
