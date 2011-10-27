<!-- nathan -->
<?php include( 'includes/header.php' ) ?>
		
			<section id="game">
				<h3>Player Name</h3>
				<input id="playerName" type="text" name="name" />
				<div id="choose">
					<span class="game-choice btn" data-value="rock">nsync</span>
					<span class="game-choice btn" data-value="paper">bsb</span>
					<span class="game-choice btn" data-value="scissors">nkotb</span>
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
				<h3>top teeny boppers</h3>
					<ol>
					</ol>
				<?php include( 'includes/footer.php' ) ?>
			</section>
				
			
				