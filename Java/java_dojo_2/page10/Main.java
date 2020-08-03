import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Bicycle bicycle = new Bicycle();
    bicycle.setName("Bianchi");
    bicycle.setColor("Green");

    bicycle.printData();
    System.out.println("-----------------");
    System.out.print("Enter distance to move: ");
    int distance = scanner.nextInt();
    bicycle.run(distance);

    System.out.println("=================");
    Car car = new Car();

    car.setName("Ferrari");
    car.setColor("Red");

    System.out.println("【Car Info】");
    car.printData();

    System.out.println("-----------------");
    System.out.print("Enter distance to move: ");
    int fuel = scanner.nextInt();
    car.run(fuel);
    
    System.out.println("-----------------");
    System.out.print("Enter amount to refuel: ");
    int charge = scanner.nextInt();
    car.charge(charge);
  }
}