<?php
class Menu {
  public $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function hello() {
    echo 'I am '.$this->name;
  }
}

$curry = new Menu('CURRY');
$pasta = new Menu('PASTA');

?>

<!-- Print the name property of $curry inside the <p> tag -->
<p><?php echo $curry->name ?></p>

<!-- Print the name property of $pasta inside the <p> tag -->
<p><?php echo $pasta->name ?></p>
