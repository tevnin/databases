<?php
	require('return_as_json.php');

	$return = array();
	$return['success'] = true;
	$return['data'] = array('hello'=>'world');
	
	return_as_json($return);
?>