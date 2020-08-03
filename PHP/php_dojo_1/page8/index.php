<?php
$menu = array('name' => 'CURRY', 'price' => 9);
echo 'Value of $menu: ';
// var_export is a function for seeing the content of variables
var_export($menu);
echo '<br>';
echo '-----';
echo '<br>';

// Write your code below
echo $menu['name'] . ' is $' . $menu['price'];

?>