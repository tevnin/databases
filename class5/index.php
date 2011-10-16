<?php 
	$mongo = new Mongo();
	//if db doesn't exist, it creates it
	$db = $mongo->selectDB("tami");
	
	$highscore = array('initials'=>'jme', score=>200);
	$db->highscores->insert($highscore);
	
	$results = $db->highscores->find()->sort(array('score'=>1))->limit(3);
	//converts Mongo goggelygook into nicer JSON
	//s$results = iterator_to_array($results)
	echo json_encode($results);
	
	foreach($results as $record){
		print_r($record);
		print_r($record['score'])
	}
	
	//=> in PHP is like : in JS
	//-> in PHP is like . in JS
?>