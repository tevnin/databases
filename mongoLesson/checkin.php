<?php

require "db/setup.php";
require "db/header.php";

if ( ! isset( $username ) ) {
  echo "you are not logged in!";
}
else if ( ! isset( $_GET["id"] ) ) {
  echo "no location set!";
}
else {
  $location = $locations->findOne( array( "_id" => new MongoId( $_GET["id"] ) ) );
  if ( $location ) {
    echo "you checked into: " . $location["name"];
    
    $newCheckin = array();
    $newCheckin["name"] = $username;
    $newCheckin["locationName"] = $location["name"];
    $newCheckin["locationId"] = $location["_id"];
    $newCheckin["timestamp"] = new MongoDate();
    $checkins->insert( $newCheckin );
  }
  else {
    echo "no location found";
  }

}
?>