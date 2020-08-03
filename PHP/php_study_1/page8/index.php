<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php
  
    $x = 1071;
    
    // Write the if-elseif-else statement below
    if($x % 3 == 0 && $x % 7 == 0) {
      echo 'x is a multiple of 3 and a multiple of 7.';
    }else if($x % 3 == 0) {
      echo 'x is a multiple of 3 but not a multiple of 7.';
    }else if($x % 7 == 0) {
      echo 'x is a multiple of 7 but not a multiple of 3.';
    }else {
      echo 'x is neither a multiple of 7 nor a multiple of 3.';
    }
    
  ?>

</body>
</html>