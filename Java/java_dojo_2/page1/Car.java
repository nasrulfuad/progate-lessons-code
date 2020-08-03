class Car {
  private String name;
  private String color;
  private int distance = 0;
  private int fuel = 100;
  
  Car(String name, String color) {
    this.name = name;
    this.color = color;
  }
  
  public void printData() {
    System.out.println("Name: " + this.name);
    System.out.println("Color: " + this.color);
    System.out.println("Distance: " + this.distance + "km");
    System.out.println("Fuel: " + this.fuel + "L");
  }
  
  public void run(int distance) {
    System.out.println("Moving " + distance + "km ...");
    if (distance <= this.fuel) {
      this.distance += distance;
      this.fuel -= distance;
    } else {
      System.out.println("Not enough fuel");
    }
    System.out.println("Distance: " + this.distance + "km");
    System.out.println("Fuel: " + this.fuel + "L");
  }
  
  public void charge(int litre) {
    System.out.println("Adding " + litre + "L ...");
    if (litre <= 0) {
      System.out.println("No fuel added");
    } else if (litre + this.fuel >= 100) {
      System.out.println("Tank now full");
      this.fuel = 100;
    } else {
      this.fuel += litre;
    }
    System.out.println("Fuel: " + this.fuel + "L");
  }
}