<?php require("resume.php"); ?>

<!DOCTYPE html>
<html>

	<head>
		<title>Tami Evnin - Resume</title>
		<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
		<script src="resume.js" type="text/javascript" charset="utf-8"></script>
		
	</head>
	
	<body>
		<div id="wrapper">
			<header id="top">
				
				<h1><?php echo $name; ?></h1>
			</header>
		
			<section id="school">
				<h3><?php echo $school; ?></h3>

				<ul>
					<?php for($i = 0; $i < count($me["school"]); $i++){
						echo "<li><h4>" . $me["school"][$i]["name"] . "</h4><p>" . $me["school"][$i]["year"] . "</p></li>";
					}?>
				</ul>

			</section>
		
			<section id="work">
				<h3><?php echo $work; ?></h3>
				<ul>
					<?php /*foreach($me["work"] as $val){
						
						foreach($val["title"] as $stuff){
							
							echo $stuff;
						
						}
						
					}*/
						
					for($i = 0; $i < count($me["work"]); $i++){
						echo "<li><h4>" . $me["work"][$i]["title"] . "</h4><p><span>" . $me["work"][$i]["company"] . "</span> " . $me["work"][$i]["year"] . "</p><p>" . $me["work"][$i]["text"] . "</p></li>";
					}?>
				</ul>

			</section>
		
			<section id="achievements">
				<h3><?php echo $achieve; ?></h3>
				<ul>
					<?php for($i = 0; $i < count($me["achieve"]); $i++){
						echo "<li><h4>" . $me["achieve"][$i]["award"] . "</h4><p><span>" . $me["achieve"][$i]["from"] . "</span> " . $me["achieve"][$i]["year"] . "</p></li>";
					}?>
				</ul>

			</section>
		
			<section id="recs">
				<h3><?php echo $recs; ?></h3>
				<ul>
					<?php for($i = 0; $i < count($me["recs"]); $i++){
						echo "<li><h4>" . $me["recs"][$i]["name"] . "</h4><p><span>" . $me["recs"][$i]["title"] . "</span> " . $me["recs"][$i]["text"] . "</p></li>";
					}?>
				</ul>

			</section>

			
			<footer>
				<h4>&copy 2011 Tami Evnin</h4>
			</footer>
		</div>
	</body>
	
</html>
