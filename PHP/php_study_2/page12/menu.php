<?php
class Menu {
  public $name;
  public $price;
  public $image;
  
  public function __construct($name, $price, $image) {
    $this->name = $name;
    $this->price = $price;
    $this->image = $image;
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
  
  // Define the getTaxIncludedPrice method
  public function getTaxIncludedPrice() {
    $tax = $this->price * 1.0725;
    return round($tax, 2);
  }
  
}
?>