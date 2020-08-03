<?php
require_once('drink.php');
require_once('food.php');
require_once('review.php');

$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png', 'cold');
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png', 'hot');
$curry = new Food('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png', 3);
$pasta = new Food('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png', 1);

$menus = array($juice, $coffee, $curry, $pasta);

$review1 = new Review($juice->getName(), 'Yummy');
$review2 = new Review($curry->getName(), 'Very hearty');

$reviews = array($review1, $review2);

?>