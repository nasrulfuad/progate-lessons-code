<?php
require_once('drink.php');
require_once('food.php');
require_once('review.php');
require_once('user.php');

$juice = new Drink('JUICE', 6, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/juice.png', 'cold');
$coffee = new Drink('COFFEE', 5, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/coffee.png', 'hot');
$curry = new Food('CURRY', 9, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/curry.png', 3);
$pasta = new Food('PASTA', 12, 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/pasta.png', 1);

$menus = array($juice, $coffee, $curry, $pasta);

$user1 = new User('Alex', 'male');
$user2 = new User('Emma', 'female');

$users = array($user1, $user2);

$review1 = new Review($juice->getName(), $user1->getName(), 'Yummy');
$review2 = new Review($curry->getName(), $user1->getName(), 'Very hearty');
$review3 = new Review($coffee->getName(), $user1->getName(), 'Smelled so nice');
$review4 = new Review($pasta->getName(), $user1->getName(), 'The sauce was really good :)');
$review5 = new Review($juice->getName(), $user2->getName(), 'Just a plain old orange juice');
$review6 = new Review($curry->getName(), $user2->getName(), 'Tasted good for its price');
$review7 = new Review($coffee->getName(), $user2->getName(), 'The bitterness was just right.');
$review8 = new Review($pasta->getName(), $user2->getName(), 'Finely selected ingredients.');

$reviews = array($review1, $review2, $review3, $review4, $review5, $review6, $review7, $review8);

?>