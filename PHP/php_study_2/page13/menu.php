<?php
class Menu {
  // Change the properties name, price, and image to private
  private $name;
  private $price;
  private $image;
  
  public function __construct($name, $price, $image) {
    $this->name = $name;
    $this->price = $price;
    $this->image = $image;
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
  
  // Define the getName method
  public function getName() {
    return $this->name;
  }
  
  // Define the getImage method
  public function getImage() {
    return $this->image;
  }
  
  public function getTaxIncludedPrice() {
    return round($this->price * 1.0725, 2);
  }
  
}
?>