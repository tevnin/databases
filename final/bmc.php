<!DOCTYPE html>
<html>

	<head>
		<title>BMC</title>
		
		<link href='http://fonts.googleapis.com/css?family=Calligraffitti|Open+Sans:400,800,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="styles/bmc.css" type="text/css" media="screen" title="no title" charset="utf-8">
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
		<script src="js/model.js" type="text/javascript" charset="utf-8"></script>
		
	</head>
	
	<body>
			<nav>
				<div id="navWrapper">
					<h1>work<span>flow</span></h1>
					<article id="register"></article>
					<h3 id="replay">replay</h3>
				</div>
			</nav>
			
			<section id="main">
	<!-- BODY goes here-->
	<section id="intro">
		<h2>How do I create a<br /> business model?</h2>
			<form id="regForm" method="POST">
				<ul>
					<li><input name="name" id="name" value="Name" onfocus="if (this.value=='name') this.value = ''"/></li>
					<li><input name="email" id="email" value="Project Name" onfocus="if (this.value=='email') this.value = ''"></li>
				</ul>
				</form>
	</section>

	<h3 id="start_bm" class="saveUser"><span>get started</span></h3>
	
	
	<section id="model"></section>
	

<?php
	include( 'includes/footer.php' );
?>