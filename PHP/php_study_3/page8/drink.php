<?php 
require_once('menu.php');

class Drink extends Menu {
  private $type;
  
  public function __construct($name, $price, $image, $type) {
    // Remove the 4 lines below
    // Call the constructor of the parent class and set the arguments
    parent::__construct($name, $price, $image);
    
    $this->type = $type;
  }
  
  public function getType() {
    return $this->type;
  }
  
  public function setType($type) {
    $this->type = $type;
  }
  
}

?>