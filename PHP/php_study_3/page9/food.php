<?php 
require_once('menu.php');

class Food extends Menu {
  // Declare a private property named $spiciness
  private $spiciness;
  
  // Override the __construct method of the parent class
  public function __construct($name, $price, $image, $spiciness) {
    parent::__construct($name, $price, $image);
    $this->spiciness = $spiciness;
  }
  
  // Define the getSpiciness method
  public function getSpiciness() {
    return $this->spiciness;
  }
  
}

?>