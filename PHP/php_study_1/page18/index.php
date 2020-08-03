<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    // Define the hello function
    function hello() {
      echo "Hello, world!";
    }
    
    // Call the hello function
    hello();
    
    echo '<br>';
    // Define the printRectangleArea function
    function printRectangleArea($height, $width) {
      echo $height * $width;
    }
    
    // Call the printRectangleArea function with (5, 10) as the argument
    printRectangleArea(5, 10);
    
  ?>

</body>
</html>
