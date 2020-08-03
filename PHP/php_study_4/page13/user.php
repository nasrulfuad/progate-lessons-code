<?php
class User {
  // Declare the $id private property
  private $id;
  private $name;
  private $gender;
  // Declare the $count private class property with 0 as the initial value
  private static $count = 0;
  
  public function __construct($name, $gender) {
    $this->name = $name;
    $this->gender = $gender;
    // Increment the $count class property by 1
    self::$count++;
    
    // Assign the value of the $count class property to the id property
    $this->id = self::$count;
    
  }
  
  // Define the getId method
  public function getId() {
    return $this->id;
  }
  
  
  public function getName() {
    return $this->name;
  }

  public function getGender() {
    return $this->gender;
  }
}

?>