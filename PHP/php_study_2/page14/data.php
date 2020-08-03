<?php
require_once('menu.php');

$juice = new Menu('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png');
$coffee = new Menu('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png');
$curry = new Menu('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png');
$pasta = new Menu('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png');

// Set the orderCount property of $juice to 2 using the setOrderCount method 
$juice->setOrderCount(2);

$menus = array($juice, $coffee, $curry, $pasta);

?>