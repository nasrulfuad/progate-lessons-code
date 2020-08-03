class Bicycle extends Vehicle {
  Bicycle(String name, String color) {
    super(name, color);
  }

  public void run(int distance) {
    System.out.println("Moving " + distance + "km ...");
    this.distance += distance;
    System.out.println("Distance: " + this.distance + "km");
  }
}
