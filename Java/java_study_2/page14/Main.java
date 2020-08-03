class Main {
  public static void main(String[] args) {
    String[] names = {"Bob", "Kate", "John"};
    
    // Get the elements of names using an enhanced for loop, and print "My name is ____"
    for(String name: names) {
      System.out.println("My name is " + name);
    }
    
  }
}