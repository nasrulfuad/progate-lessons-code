<?php
class Menu {
  private $name;
  private $price;
  private $image;
  private $orderCount = 0;
  // Make the $count class property private and set the initial value to 0
  private static $count = 0;
  
  public function __construct($name, $price, $image) {
    $this->name = $name;
    $this->price = $price;
    $this->image = $image;
    // Add 1 to the value of $count
    self::$count++;
    
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
  
  public function getOrderCount() {
    return $this->orderCount;
  }
  
  public function setOrderCount($orderCount) {
    $this->orderCount = $orderCount;
  }
  
  public function getTaxIncludedPrice() {
    return round($this->price * 1.0725, 2);
  }
  
  public function getTotalPrice() {
    return $this->getTaxIncludedPrice() * $this->orderCount;
  }
  
  // Add a class method called getCount
  public static function getCount() {
    return self::$count;
  }
  
}
?>