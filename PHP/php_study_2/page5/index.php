<?php
class Menu {
  public $name;
  
  public function hello() {
    // Print "I am ____"
    echo 'I am ' . $this->name;
    
  }
}

$curry = new Menu();
$pasta = new Menu();
$curry->name = 'CURRY';
$pasta->name = 'PASTA';
$curry->hello();
echo '<br>';
$pasta->hello();

?>