<?php
	    // $newUser = array();
	    // $newUser["name"] = $_POST["name"];
	    // $newUser['email'] = $_POST["email"];
	
			//insert user in users collection
	    $users->update( array('name'=>$userName,'email'=>$userEmail), array('name'=>$userName,'email'=>$userEmail) ,true);


?>

