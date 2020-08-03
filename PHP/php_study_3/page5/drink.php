<?php 
require_once('menu.php');

class Drink extends Menu {
  // Declare a private property named $type
  private $type;
  
  // Define the getType method
  public function getType() {
    return $this->type;
  }
  
  // Define the setType method
  public function setType($type) {
    $this->type = $type;
  }
  
}

?>