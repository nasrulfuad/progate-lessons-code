<?php
// Receive the query data using $_GET, and assign it to the $menuName variable
$menuName = $_GET['name'];
?>

<!-- Print the $menuName variable -->
<h1><?php echo $menuName ?> details page</h1>