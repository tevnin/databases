<?php
	require('mongo.php');
	
	if($_POST['flow'] === null) {
		$users->update(array('name'=>$_POST['name'],'email'=>$_POST['email']),array('name'=>$_POST['name'],'email'=>$_POST['email']),
		true);
	}else{
		$users->update(array('name'=>$_POST['name'],'email'=>$_POST['email']),	array('$push'=>array('project'=>array('title'=>$_POST['project'],'flow'=>$_POST['flow']))),
		true);
	}
	

?>