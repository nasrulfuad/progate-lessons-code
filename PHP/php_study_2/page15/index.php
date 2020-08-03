<?php require_once('data.php') ?>

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
    <!-- Write the beginning tag of <form> below -->
    <form action="confirm.php" method="post">
      <div class="menu-items">
        <?php foreach ($menus as $menu): ?>
          <div class="menu-item">
            <img src="<?php echo $menu->getImage() ?>" class="menu-item-image">
            <h3 class="menu-item-name"><?php echo $menu->getName() ?></h3>
            <p class="price">$<?php echo $menu->getTaxIncludedPrice() ?> (tax included)</p>
            <span>Qty: </span>
            <!-- Create an input box using the <input> tag -->
            <input type="text" value="0" name="<?php echo $menu->getName() ?>">
          </div>
        <?php endforeach ?>
      </div>
      <!-- Create an submit button using the <input> tag -->
      <input type="submit" value="Order">
    <!-- Write the closing tag of <form> below -->
    </form>
  </div>
</body>
</html>
