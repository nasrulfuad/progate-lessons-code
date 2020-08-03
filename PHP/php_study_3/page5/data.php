<?php
require_once('drink.php');
require_once('food.php');

$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png');
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png');

// Use the setter method for $juice to assign the string 'cold' to the $type property
$juice->setType('cold');

// Use the setter method for $coffee to assign the string 'hot' to the $type property
$coffee->setType('hot');

$menus = array($juice, $coffee);

?>