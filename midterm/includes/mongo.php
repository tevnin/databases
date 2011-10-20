<?php 
	$mongo = new Mongo();
	//if db doesn't exist, it creates it
	$db = $mongo->selectDB("evnin_tami");
	
	$playerName = $_POST['name'];   //playerName;
	$win = (int)($_POST['wins']);
	$loss = (int)($_POST['losses']);
	$tie = (int)($_POST['ties']);
	$games = $win+$loss+$tie;
	
	// $json = json_decode($_POST['data']);
	// $playerName = $json->['name'];   //playerName;
	// $win = $json['wins'];
	// $loss = $json['losses'];
	// $tie = $json['ties'];

	$names = $db->players->find(array(), array("name" => 1));
	$names = iterator_to_array($names);
	$names = json_encode($names);
	//error_log((string)$names, 0);
	
	// foreach($names as $name){
	// 	error_log((string)$name, 0);
	// }
	
	//if($names)

	$players = array("name" => $playerName, "wins" => $win,"losses" => $loss,"ties" => $tie,"games" => $games);
	
	$db->players->insert($players);
	//db.players.find()
	
	
	// $results = $db->highscores->find()->sort(array('score'=>1))->limit(3);
	// //converts Mongo goggelygook into nicer JSON
	// //s$results = iterator_to_array($results)
	// echo json_encode($results);
	// 
	// foreach($results as $record){
	// 	print_r($record);
	// 	print_r($record['score'])
	// }
	
	//=> in PHP is like : in JS
	//-> in PHP is like . in JS
?>