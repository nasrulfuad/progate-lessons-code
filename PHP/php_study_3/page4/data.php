<?php
// Remove the line that imports menu.php

// Import the drink.php and food.php files
require_once('drink.php');
require_once('food.php');

// Make $juice an instance of the Drink class
$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png');
// Make $coffee an instance of the Drink class
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png');
// Make $curry an instance of the Food class
$curry = new Food('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png');
// Make $pasta an instance of the Food class
$pasta = new Food('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png');

$menus = array($juice, $coffee, $curry, $pasta);

?>