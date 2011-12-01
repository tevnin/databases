<?php
require "db/setup.php";
?>

<?php

if ( isset( $_POST["name"] ) ) {

  if ( $users->findOne( array( "name" => $_POST["name"] ) ) ) {
    echo "name already registed!";
  }
  else if ( $users->findOne( array( "email" => $_POST["email"] ) ) ) {
    echo "email already registed!";
  }
  else {
    $newUser = array();
    $newUser["name"] = $_POST["name"];
    $newUser["email"] = $_POST["email"];
    $newUser["home"] = array( intval($_POST["lat"]) , intval($_POST["long"]) );
    $users->insert( $newUser );
    echo "yay!";
  }
}

?>

<h3>Register</h3>

<form method="POST">
Name: <input name="name"><br>
Email: <input name="email"><br>
Lat: <input name="lat"><br>
Long: <input name="long"><br>
<input type="submit">
</form>