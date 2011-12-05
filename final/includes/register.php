<?php
	require('mongo.php');


	// if ( isset( $_POST['name'] ) ) {
	// 
	//   if ( $users->findOne( array( 'name' => $_POST['name'] ) ) ) {
	//     error_log("name already registed!");
	//   }
	//   else if ( $users->findOne( array( 'email' => $_POST['email'] ) ) ) {
	//     error_log("email already registed!");
	//   }
	//   else {
	    $newUser = array();
	    $newUser["name"] = $_POST["name"];
	    $newUser["email"] = $_POST["email"];
			$newUser["project"] = $_POST["project"];
	    
			//insert user in users collection
	    $users->insert( $newUser );
	  // }
	// }

?>

