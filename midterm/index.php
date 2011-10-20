<!-- nathan -->
<?php include( 'includes/header.php' ) ?>
		
			<section id="game">
				<input id="playerName" type="text" name="name" value="Player Name" />
				<div id="choose">
					<span class="game-choice btn" data-value="rock">Rock</span>
					<span class="game-choice btn" data-value="paper">Paper</span>
					<span class="game-choice btn" data-value="scissors">Scissors</span>
				</div>
			
				<div id="results">
					<div id="player-hand"></div>
					<div id="cpu-hand"></div>
				
					<strong id="result-text"></strong>
					<h3>Consecutive Wins: <span id="wins">0</span></h3>
				</div>
			
				<footer>
					<span id="highscore-button" class="btn">High Scores</span>
				</footer>
			</section>
		
			<section id="highscores">
				<h2>Most Consecutive Wins</h2>
			
				<?php include( "includes/highScores.php") ?>
				
			<?php include( 'includes/footer.php' ) ?>
				