<?php

require "db/setup.php";
require "db/header.php";

foreach( $users->find() as $user ) {
  print_r( $user );
  echo "<br>";
}
?>