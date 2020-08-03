class Main {
  public static void main(String[] args) {
    System.out.println("=== while loop ===");
    int i = 1;
    while (i < 10) {
      // Exit the loop if i is divisible by 5
      if (i % 5 == 0) {
        break;
      }
      
      System.out.println(i);
      i++;
    }
    
    System.out.println("=== for loop ===");
    for (int j = 1; j < 10; j++) {
      // Skip the loop if j is divisible by 3
      if(j % 3 == 0) {
        continue;
      }
      
      System.out.println(j);
    }
  }
}