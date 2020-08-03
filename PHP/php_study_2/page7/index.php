<?php
class Menu {
  public $name;
  
  // Add the $name parameter to the constructor
  public function __construct($name) {
    // Assign $name to the name property
    $this->name = $name;
    
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
}

// Pass 'CURRY' to new Menu() as the argument
$curry = new Menu('CURRY');
// Pass 'PASTA' to new Menu() as the argument
$pasta = new Menu('PASTA');
// Remove the 1 line below

// Remove the 1 line below

$curry->hello();
echo '<br>';
$pasta->hello();

?>