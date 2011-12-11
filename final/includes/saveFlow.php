<?php
	require('mongo.php');
	
	//$newUser = array();
  $userName["name"] = $_POST["name"];
  $userEmail['email'] = $_POST["email"];
	$userProject['project'] = $_POST["project"];
	$userFlow['flow'] = $_POST["flow"];
	
	if(empty($userFlow)) {
		// $users->update(array('name'=>$_POST['name'],'email'=>$_POST['email']),array('name'=>$_POST['name'],'email'=>$_POST['email']),
		// 		true);
		require('register.php');
	}else{
		$users->update(array('name'=>$userName,'email'=>$userEmail),	array('$push'=>array('project'=>array('title'=>$userProject,"flow"=>$userFlow))),
		true);
	}
	

?>