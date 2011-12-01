<?php

require "db/setup.php";
require "db/header.php";

$last = $checkins->find()->limit(5)->sort( array( "timestamp" => -1 ) );
foreach ( $last as $c ) {
  print_r( $c );
  echo "<br>";
}

?>