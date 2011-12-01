<?php

require "db/setup.php";
require "db/header.php";

if ( ! isset( $username ) ){
  echo "go away";
}
else {

  if ( isset( $_POST["lat"] ) ) {
    $users->update( array( "name" => $username ) , 
                    array( '$set' => 
                           array( "home" => array( intval($_POST["lat"]) , intval($_POST["long"]) ) ) ) );
  }

  if ( isset( $_POST["likes"] ) ) {
    $users->update( array( "name" => $username ) , 
                    array( '$set' => 
                           array( "likes" => explode( "," , $_POST["likes"] ) ) ) );
  }


  $me = $users->findOne( array( "name" => $username ) );
  if ( ! isset( $me["likes"] ) ) {
    $me["likes"] = array();
  }
    
  print_r( $me );
  echo "<hr>";

  ?>
Edit my Profile
  <form method="POST">
Lat: <input name="lat" value="<?= $me["home"][0] ?>"><br>
Long: <input name="long" value="<?= $me["home"][1] ?>"><br>
Likes: <input name="likes" value="<?= implode( "," , $me["likes"] ) ?>"><br>

<input type="submit">
</form>
<?php

  echo "<hr>";

  $last = $checkins->find( array( "name" => $username ) )->limit(5)->sort( array( "timestamp" => -1 ) );
  foreach ( $last as $c ) {
    print_r( $c );
    echo "<br>";
  }

}

?>

Closest Location to me that I like

<?php

$cursor = $locations->find( array( "location" => array( '$near' => $me["home"] ) ,
                                   "tags" => array( '$in' => $me["likes"] ) ) )->limit(1);
require "db/printLocations.php";

?>