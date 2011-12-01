<?php
	require('mongo.php');
	
	//db.flow.find({},{number:1,text:1}).sort({number:1})
	$questions = $flow->find(array());
	$questions = iterator_to_array($questions,false);
	
	$formattedResults = array();
	
  foreach($questions as $question) {
  	array_push($formattedResults,$question);
  }
  echo json_encode($formattedResults);


?>