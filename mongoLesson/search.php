<?php
require "db/setup.php";
require "db/header.php";
?>

<?php

if ( isset( $_POST["tag"] ) ) {
  $tag = $_POST["tag"];
  echo "doing tag search on " . $tag . "<br>";
  
  $cursor = $locations->find( array( "tags" => $tag ) );
  require "db/printLocations.php";
}

if ( isset( $_POST["lat"] ) ) {
  $lat = $_POST["lat"];
  $long = $_POST["long"];
  echo "doing location search on " . $lat . "x" . $long . "<br>";
  $q = array( "location" => array( '$near' => array( intval($lat) , intval($long) ) ) );
  $cursor = $locations->find( $q );
  require "db/printLocations.php";
}


?>

<hr>
Tag Search
<form method="POST">
Tag: <input name="tag"><br>
<input type="submit">
</form>

<hr>
Location Search
<form method="POST">
Lat: <input name="lat"><br>
Long: <input name="long"><br>
<input type="submit">
</form>