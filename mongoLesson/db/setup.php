<?php

// connect
$m = new Mongo();

$db = $m->mini4sq;

$locations = $db->locations;
$users = $db->users;
$checkins = $db->checkins;

?>

