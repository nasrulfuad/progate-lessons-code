<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    $scores = array('Math' => 70, 'Language' => 90, 'Science' => 80);

    // Write the foreach loop below
    foreach($scores as $key => $value){
      echo "$key : $value";
    }
  ?>

</body>
</html>