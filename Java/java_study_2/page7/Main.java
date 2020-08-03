class Main {
  public static void main(String[] args) {
    String grade = "G";
    
    // Using default, print "Invalid grade" when none of the cases match
    switch (grade) {
      case "A":
        System.out.println("Excellent");
        break;
      case "B":
      case "C":  
        System.out.println("Well done");
        break;
      case "D":
        System.out.println("You passed");
        break;
      case "F":
        System.out.println("You failed");
        break;
      default:
        System.out.println("Invalid grade");
    }
  }
}