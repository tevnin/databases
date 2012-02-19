<?php

	// connect to dbFinal database
	$mongo = new Mongo("mongodb://admin:2787aviva@ds029827.mongolab.com:29827/workflow");
	//"mongodb://admin:2787aviva@ds029827.mongolab.com:29827/workflow"
	
	/***** CHANGE DB NAME (dbFinal) to other DB name if necessary! ******/
	$db = $mongo->workflow;
	
	//do stuff in flow collection
	$flow = $db->flow;
	
	//do stuff in users collection
	$users = $db->users;
	
	//do stuff in the business model collection
	$bm = $db->bm;

?>