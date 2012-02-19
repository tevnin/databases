<?php
	require('mongo.php');
	
	$questions = $bm->find(array());
	$questions = iterator_to_array($questions,false);
	
	$formattedResults = array();
	
  foreach($questions as $question) {
  	array_push($formattedResults,$question);
  }
  echo json_encode($formattedResults);


?>