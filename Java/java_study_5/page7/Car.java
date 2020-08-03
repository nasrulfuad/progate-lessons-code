class Car extends Vehicle {
  private int fuel = 50;
  
  // Define the constructor for the Car class
  // Call the constructor of the superclass using super()
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
