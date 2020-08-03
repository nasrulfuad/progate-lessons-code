<?php
class Menu {
  public $name;
  
  // Define the hello method
  public function hello() {
    echo 'I am an instance of the Menu class';
  }
  
}

$curry = new Menu();
$pasta = new Menu();
$curry->name = 'CURRY';
$pasta->name = 'PASTA';
// Call the hello method using $curry
$curry->hello();

echo '<br>';
// Call the hello method using $pasta
$pasta->hello();

?>