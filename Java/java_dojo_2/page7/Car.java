class Car {
  private String name;
  private String color;
  private int distance = 0;
  
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
    System.out.println("Distance: "+ distance +"km");
  }
  
  public void printData() {
    System.out.println("【Bicycle Info】");
    System.out.println("Name: " + this.getName());
    System.out.println("Color: " + this.getColor());
    System.out.println("Distance: "+ this.distance +"km");
  }
}