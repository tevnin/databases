<?php

	$mongo = new Mongo();
	$db = $mongo->selectDB("evnin_tami");
	
	//db.players.find({},{"name":1,"wins":1,"games":1}).sort({"wins":1})
	$winners = $db->players->find(array(),array("name"=>1,"wins"=>1,"games"=>1))->sort(array("wins"=>-1));
	$winners = iterator_to_array($winners,false);

	
	$formattedResults = array();
  foreach($winners as $record) {
  	array_push($formattedResults,$record);
  }
  echo json_encode($formattedResults);

?>





