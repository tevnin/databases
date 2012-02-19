<?php
	require('mongo.php');
	
	//$newUser = array();
  $userName = $_POST["name"];
	$userProject = $_POST["project"];
	
	if(isset( $_POST["flow"] )){
		$userFlow['flow'] = $_POST["flow"];
		$users->update(array('name'=>$userName),	array('$push'=>array('project'=>array('title'=>$userProject))),
		true);
	}else{
		require('register.php');
	}

	

?>