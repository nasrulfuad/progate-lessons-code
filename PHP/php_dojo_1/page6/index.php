<?php
$prices = array(10, 6, 7, 8);
echo 'Value of $prices: ';
foreach ($prices as $price) {
  echo $price.' ';
}
echo '<br>';
echo '-----';
echo '<br>';

// Write your code below
$total = 0;
foreach($prices as $price) {
  $total += $price;
}
echo 'The total price is $' . $total;

?>