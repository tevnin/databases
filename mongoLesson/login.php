<?php
require "db/setup.php";

if ( isset( $_POST["email"] ) ) {
  $me = $users->findOne( array( "email" => $_POST["email"] ) );
  if ( $me ) {
    setcookie( "username" , $me["name"] );
    header( "Location: locations.php" );
    return;
  }
  else {
    echo "no user :(";
    echo "<a href=\"register.php\">register</a>";
  }
}

require "db/header.php";

?>
<br>
<hr>

Login:
<form method="POST">
Email: <input name="email"><br>
</form>