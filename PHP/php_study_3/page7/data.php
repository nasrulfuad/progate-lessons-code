<?php
require_once('drink.php');
require_once('food.php');

// Add the argument 'cold' to the new method call for $juice
$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png', 'cold');
// Add the argument 'hot' to the new method call for $coffee
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png', 'hot');
$curry = new Food('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png');
$pasta = new Food('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png');

// Remove the 2 lines below
$menus = array($juice, $coffee, $curry, $pasta);

?>