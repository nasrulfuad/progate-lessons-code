<?php
require_once('drink.php');
require_once('food.php');

$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png', 'cold');
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png', 'hot');
// Add the integer argument 3 as the last argument of the new method call for $curry
$curry = new Food('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png', 3);
// Add the integer argument 1 as the last argument of the new method call for $pasta
$pasta = new Food('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png', 1);

$menus = array($juice, $coffee, $curry, $pasta);

?>