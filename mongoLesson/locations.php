<?php
require "db/setup.php";
require "db/header.php";
?>

<?
if ( isset($_POST["name"]) ) {
  $newThing = array( "name" => $_POST["name"] );
  $newThing["tags"] = explode(",",$_POST["tags"]);
  $newThing["location"] = array( intval($_POST["lat"]) , intval($_POST["long"]) );
  print_r( $newThing );
  $locations->insert( $newThing );
}
?>

<?php
$cursor = $locations->find();
require "db/printLocations.php";
?>

<hr>

<form method="POST">
Name: <input name="name"><br>
Tags: <input name="tags"><br>
Lat: <input name="lat"><br>
Long: <input name="long"><br>
<input type="submit">
</form>

