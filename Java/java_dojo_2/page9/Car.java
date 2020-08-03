class Car {
  private String name;
  private String color;
  private int distance = 0;
  private int fuel = 100;
  
  public void setName(String name) {
    this.name = name;
  }

  public void setColor(String color) {
    this.color = color;
  }
  
  public String getName() {
    return this.name;
  }
  
  public String getColor() {
    return this.color;
  }
  
  public void run(int distance) {
    System.out.println("Moving "+ distance +"km ...");
    if(distance <= this.fuel) {
      this.distance += distance;
      this.fuel -= distance;
    } else {
      System.out.println("Not enough fuel");
    }
    System.out.println("Distance: "+ this.distance +"km");
    System.out.println("Fuel: "+ this.fuel +"L");
  }
  
  public void printData() {
    System.out.println("Name: " + this.getName());
    System.out.println("Color: " + this.getColor());
    System.out.println("Distance: "+ this.distance +"km");
    System.out.println("Fuel: "+ this.fuel +"L");
  }
}