<?php
class Menu {
  // Declare the $name property
  public $name;
  
}

$curry = new Menu();
$pasta = new Menu();
// Assign 'CURRY' to the name property of $curry
$curry->name = 'CURRY';

// Assign 'PASTA' to the name property of $pasta
$pasta->name = 'PASTA';

// Print the name property of $curry
echo $curry->name;

echo '<br>';
// Print the name property of $pasta
echo $pasta->name;

?>