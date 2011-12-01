<h3>Welcome to Mini 4sq</h3>
<?php
$username = $_COOKIE['username'];
if ( isset( $username ) ) {
  echo "<h4>logged in as: <a href='profile.php'>" . $username . "<a/></h4>";
}
?>