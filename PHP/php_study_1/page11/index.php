<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<body>

  <?php

    // Define the associative array below
    $scores = [
      'Math' => 70,
      'Language' => 90,
      'Science' => 80
    ];
    
    $scores['Science'] += 51;
    echo $scores['Science'];
    
  ?>

</body>
</html>