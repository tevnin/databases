<table border="1">
<?php

foreach( $cursor as $obj ) {
  echo "<tr>";
  echo "<td>" . $obj["name"] . "</td>";

  echo "<td>";
  print_r($obj["tags"]);
  echo "</td>";

  echo "<td>";
  print_r($obj["location"]);
  echo "</td>";

  if ( isset( $username ) ) {
    echo "<td>";
    echo "<a href='checkin.php?id=" . $obj["_id"] . "'>checkin</a>";
    echo "</td>";
  }
  
  echo "</tr>";
}

?>
</table>