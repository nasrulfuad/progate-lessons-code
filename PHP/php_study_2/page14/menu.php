<?php
class Menu {
  private $name;
  private $price;
  private $image;
  // Declare the $orderCount property with default value of 0
  private $orderCount = 0;
  
  public function __construct($name, $price, $image) {
    $this->name = $name;
    $this->price = $price;
    $this->image = $image;
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function getImage() {
    return $this->image;
  }
  
  // Define the getOrderCount method
  public function getOrderCount() {
    return $this->orderCount;
  }
  
  // Define the setOrderCount method
  public function setOrderCount($orderCount) {
    $this->orderCount = $orderCount;
  }
  
  public function getTaxIncludedPrice() {
    return round($this->price * 1.0725, 2);
  }
  
}
?>