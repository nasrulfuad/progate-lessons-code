<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    // Define the getCircleArea function
    function getCircleArea($radius) {
      return $radius * $radius * 3;
    }
    
    // Call the getCircleArea function and assign the return value to the $circleArea variable
    $circleArea = getCircleArea(5);
    
    // Print the $circleArea variable
    echo $circleArea;
    
  ?>

</body>
</html>
