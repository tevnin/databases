<?php 
	function return_as_json($data) {
		header('Content-type: application/json');
		
		if(!function_exists('json_encode')) require('json_encode.php');
		
		echo $_GET['callback'] . '(' . json_encode($data) . ')';
		exit();
	}
?>