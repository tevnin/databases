<?php
	require('mongo.php');
	
	$users->update(array('name'=>$_POST['name'],'email'=>$_POST['email']),	array('$push'=>array('project'=>array('title'=>$_POST['project'],'flow'=>$_POST['flow']))),
	true);

?>