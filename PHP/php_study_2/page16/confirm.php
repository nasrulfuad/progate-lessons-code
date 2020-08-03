<!-- Import data.php -->
<?php
require_once 'data.php';
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link href='https://fonts.googleapis.com/css?family=Pacifico|Lato' rel='stylesheet' type='text/css'>
</head>
<body>
  <div class="order-wrapper">
    <h2>Cart</h2>
    <?php foreach ($menus as $menu): ?>
      <!-- Declare the $orderCount variable -->
      <?php $orderCount = $_POST[$menu->getName()] ?>
      <p class="order-amount">
        <!-- Print the name property of $menu using the getName method -->
        <?php echo $menu->getName() ?>
        x
        <!-- Print the $orderCount variable -->
        <?php echo $orderCount ?>
      </p>
    <?php endforeach ?>
  </div>
</body>
</html>