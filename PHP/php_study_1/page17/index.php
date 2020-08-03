<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    $str = 'progate';

    // Print the length of $str using strlen
    echo strlen($str);
    
    echo '<br>';
    
    $array = array('HTML', 'CSS', 'PHP');

    // Print the number of elements in $array using count
    echo count($array);
    
    echo '<br>';
    
    // Print a random number between 10 and 15 using rand
    echo rand(10, 15);
    
  ?>

</body>
</html>