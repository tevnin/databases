<?php
	header('Content-type: audio/mpeg');
	
	$number = rand(1,2);
	$filename = "{$number}.mp3";

	$file = fopen($filename,'r');
	$bytes = fread($file,filesize($filename));
	fclose($file);
	
	echo $bytes;
?>