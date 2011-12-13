<?php

	// connect to dbFinal database
	$mongo = new Mongo();
	
	/***** CHANGE DB NAME (dbFinal) to other DB name if necessary! ******/
	$db = $mongo->dbFinal;
	
	//do stuff in flow collection
	$flow = $db->flow;
	
	//do stuff in users collection
	$users = $db->users;

?>