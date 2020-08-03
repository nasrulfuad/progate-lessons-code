<?php
class Menu {
  public $name;
  
  // Define the constructor
  public function __construct() {
    echo 'An instance has been created.';
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
}

$curry = new Menu();
echo '<br>';
$pasta = new Menu();
echo '<br>';
$curry->name = 'CURRY';
$pasta->name = 'PASTA';
$curry->hello();
echo '<br>';
$pasta->hello();

?>