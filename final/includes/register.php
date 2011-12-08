<?php
	require('mongo.php');

	    $newUser = array();
	    $newUser["name"] = $_POST["name"];
	    $newUser['email'] = $_POST["email"];
	
			//insert user in users collection
	    $users->update( array('name'=>$newUser['name'],'email'=>$newUser['email']), array('name'=>$newUser['name'],'email'=>$newUser['email']) ,true);


?>

