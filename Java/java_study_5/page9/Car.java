class Car extends Vehicle {
  private int fuel = 50;

  Car(String name, String color) {
    super(name, color);
  }

  public int getFuel() {
    return this.fuel;
  }

  public void printData() {
    super.printData();
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
