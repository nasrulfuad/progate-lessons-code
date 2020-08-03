<?php
$menus = array(
  array('name' => 'CURRY', 'price' => 9),
  array('name' => 'PASTA', 'price' => 12),
  array('name' => 'COFFEE', 'price' => 6)
);

// Write your code below
$total = 0;
$maxPrice = 0;
$maxName = '';

foreach($menus as $menu) {
  $total += $menu['price'];
  if ($menu['price'] > $maxPrice) {
    $maxPrice = $menu['price'];
    $maxName = $menu['name'];
  }

  echo $menu['name'] . ' is $' . $menu['price'];
  echo '<br>';
}

echo 'The total price is $' . $total;
echo 'The most expensive item is '. $maxName .' with the price $' . $maxPrice;
?>