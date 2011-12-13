<?php
	require('mongo.php');
	
	//$newUser = array();
  $userName = $_POST["name"];
  $userEmail = $_POST["email"];
	$userProject = $_POST["project"];
	
	if(isset( $_POST["flow"] )){
		$userFlow['flow'] = $_POST["flow"];
		$users->update(array('name'=>$userName,'email'=>$userEmail),	array('$push'=>array('project'=>array('title'=>$userProject,"flow"=>$userFlow))),
		true);
	}else{
		require('register.php');
	}

	

?>