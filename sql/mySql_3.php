<?php

	//where you are connecting, db-username, db-password
	mysql_connect('localhost','root','root');
	echo mysql_error(); //print out error
	mysql_select_db('Facebook');
	
	//$email = 'evnit279@newschool.edu';
	$email = $_POST['email']; //get email address from input form
	$email = mysql_real_escape_string($_GET['email']); //accepts string, sanitizes, protects database
	
	$sql = "SELECT * FROM users WHERE email = '{$email}'";
	$query = mysql_query($sql);
	echo mysql_error();	//can do this with any mysql_ function
	
	// $row = mysql_fetch_assoc($query); //convert query into associative array
	while($row = mysql_fetch_assoc($query)) {
		echo $row['field'];
	}

	//SQL Injection
	//www.url.com/file.php?sql=SELECT%20*%20FROM%20users
	//www.url.com/file.php?sql=DROP%20datase%20Facebook
	
	
	
?>