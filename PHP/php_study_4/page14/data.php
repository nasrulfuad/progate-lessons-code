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
$user3 = new User('Alex', 'female');
$user4 = new User('Chris', 'male');

$users = array($user1, $user2, $user3, $user4);

// Delete $review1 through $review8 and paste the code below
$review1 = new Review($juice->getName(), $user1->getId(), 'Yummy');
$review2 = new Review($curry->getName(), $user1->getId(), 'Very hearty');
$review3 = new Review($coffee->getName(), $user2->getId(), 'Smelled so nice');
$review4 = new Review($pasta->getName(), $user2->getId(), 'The sauce was really good :)');
$review5 = new Review($juice->getName(), $user3->getId(), 'Just a plain old orange juice');
$review6 = new Review($curry->getName(), $user3->getId(), 'Tasted good for its price');
$review7 = new Review($coffee->getName(), $user4->getId(), 'The bitterness was just right.');
$review8 = new Review($pasta->getName(), $user4->getId(), 'Finely selected ingredients.');

$reviews = array($review1, $review2, $review3, $review4, $review5, $review6, $review7, $review8);

?>