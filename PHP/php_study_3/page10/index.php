<?php 
require_once('data.php');
require_once('menu.php');
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Café Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link href='https://fonts.googleapis.com/css?family=Pacifico|Lato' rel='stylesheet' type='text/css'>
</head>
<body>
  <div class="menu-wrapper container">
    <h1 class="logo">Café Progate</h1>
    <h3>Item count: <?php echo Menu::getCount() ?></h3>
    <form method="post" action="confirm.php">
      <div class="menu-items">
        <?php foreach ($menus as $menu): ?>
          <div class="menu-item">
            <img src="<?php echo $menu->getImage() ?>" class="menu-item-image">
            <h3 class="menu-item-name"><?php echo $menu->getName() ?></h3>
            <?php if ($menu instanceof Drink): ?>
              <p class="menu-item-type"><?php echo $menu->getType() ?></p>
            <?php else: ?>
              <!-- Make a for loop that repeats until the count of iterations is greater than the $spiciness property value -->
              <?php for($i = 0; $i < $menu->getSpiciness(); $i++): ?>
              <img class="icon-spiciness" src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/php/chilli.png">
              <?php endfor ?>
            <?php endif ?>
            <p class="price">$<?php echo $menu->getTaxIncludedPrice() ?> (tax included)</p>
            <span>Qty: </span>
            <input type="text" value="0" name="<?php echo $menu->getName() ?>">
          </div>
        <?php endforeach ?>
      </div>
      <input type="submit" value="Order">
    </form>
  </div>
</body>
</html>
