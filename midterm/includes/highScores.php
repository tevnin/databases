<?php

	$mongo = new Mongo();
	$db = $mongo->selectDB("evnin_tami");
	
	//db.players.find({},{"name":1,"wins":1,"games":1}).sort({"wins":1})
	$winners = $db->players->find(array(),array("name"=>1,"wins"=>1,"games"=>1))->sort(array("wins"=>-1));
	$winners = iterator_to_array($winners,false);
	
	
	//echo json_encode($winners);
	
	$formattedResults = array();
  foreach($winners as $record) {
  	array_push($formattedResults,$record);
  }
  echo json_encode($formattedResults);
	

	// foreach($winners as $winner){
	// 	print_r("<li><h4>" . $winner['name'] . "</h4> <p>has won " . $winner['wins'] . " games</p></li>");
	// }
?>





