<?php

	// connect to dbFinal database
	$mongo = new Mongo();
	$db = $mongo->dbFinal;
	
	//do stuff in flow collection
	$flow = $db->flow;
	
	//do stuff in users collection
	$users = $db->users;

?>