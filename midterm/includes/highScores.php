<?php

	$mong = new Mongo();
	$dada = $mong->selectDB("evnin_tami");
	
	$winners = $dada->players->find(array(),array("name"=>1,"wins"=>1,"games"=>1))->sort(array("wins"=>1));
	$winners = iterator_to_array($winners);
	//echo json_encode($winners);
	
	print_r("<ol>");
	foreach($winners as $winner){
		print_r("<li><h3>" . $winner['name'] . "</h3> <p>has won " . $winner['wins'] . " of " . $winner['games'] . " games</p></li>");
	}
	print_r("</ol>");
	
	//echo (string)$winners;
?>




