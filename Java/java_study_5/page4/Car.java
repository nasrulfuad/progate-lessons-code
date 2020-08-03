class Car extends Vehicle {
  // Declare the fuel instance field
  private int fuel = 50;
  
  // Define the getter for the fuel instance field
  public int getFuel() {
    return this.fuel;
  }
  
  // Define the charge instance method
  public void charge(int litre) {
    System.out.println("Adding " + litre + " litres ...");
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
