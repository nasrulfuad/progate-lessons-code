<?php
// Move the Menu class here
class Menu {
  public $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
}

?>