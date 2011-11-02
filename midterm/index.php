<!-- nathan -->
<?php include( 'includes/header.php' ) ?>

			<section id="intro">
				<ol>
					<li>pick your favorite <span>90's boy</span> band and watch them battle:
						<ul>
							<li><span>N*Sync</span> beats <span>BSB</span></li>
							<li><span>BSB</span> beats <span>NKOTB</span></li>
							<li><span>NKOTB</span> beats <span>N*Sync</span></li>
						</ul>
					</li>
				</ol>
				<span id="play-button" class="btn">play!</span>
			</section>
		
			<section id="game">
				<h3>Player Name</h3>
				<input id="playerName" type="text" name="name" />
				<div id="choose">
					<span class="game-choice btn" data-value="rock">bsb</span>
					<span class="game-choice btn" data-value="paper">n*sync</span>
					<span class="game-choice btn" data-value="scissors">nkotb</span>
				</div>
			
				<div id="results">
					<div id="player-hand"></div>
					<div id="cpu-hand"></div>
				
					<section id="text">
						<strong id="band-text"></strong>
						<strong id="result-text"></strong>
						<h3>consecutive wins: <span id="wins">0</span></h3>
					</section>
				</div>

					<span id="highscore-button" class="btn">high scores</span>
			</section>
		
			<section id="highscores">
				<h3>top teeny boppers</h3>
					<ol>
					</ol>
				<span id="back-button" class="btn">Back</span>
			</section>
<?php include( 'includes/footer.php' ) ?>			
			
				