var onPageReady = function() {
	var consecutiveWins = 0;
	var currentScreen = "game";
	var win = 0;
	var loss = 0;
	var tie = 0;
	var playerName;
	
	$("#results").hide();

	// who beats who
	var gameRules = { paper:"rock",rock:"scissors",scissors:"paper" };
	
	$("#game #highscore-button").click(function() { 
		goToScreen("highscores");
		
		$.post("./includes/highScores.php", function(data) {
		   $("#highscores ol").html(data);
		});

	});
	
	
	$("#highscores #back-button").click(function() { goToScreen("game");});
	$("header h1").click(function() { goToScreen("game");});
	
	$(".game-choice").click(function() {
		var playerChoice = $(this).attr('data-value');

		var random=Math.floor(Math.random()*3);
		var computerChoice; 
		if(random == 0) computerChoice = "paper"; //bsb
		else if(random == 1) computerChoice = "rock"; //nsync
		else computerChoice = "scissors"; //nkotb
		
		calculateResults(playerChoice,computerChoice);
	});
	
	var calculateResults = function(player,computer) {
		var result;
		if(computer == player) {
			win = 0;
			loss = 0;
			tie = 1;
			updateHighScores();
			
			if(player == "paper"){
				result = "larger than life"
			}else if(player == "rock"){
				result = "i just wanna be with you";
			}else{
				result = "hangin' tough";
			}
			
		}
		else if(gameRules[player] == computer) {
			win = 1;
			loss = 0;
			tie = 0;
			updateHighScores();

			if(player == "paper"){
				result = "backstreet's back!"
			}else if(player == "rock"){
				result = "you\'re tearin\' up my heart!";
			}else{
				result = "you got the right stuff, baby!";
			}
			
			consecutiveWins++;
			
		}
		else {
			win = 0;
			loss = 1;
			tie = 0;
			updateHighScores();
			consecutiveWins = 0;
			if(player == "paper"){
				result = "ain\'t nothin' but a heartache"
			}else if(player == "rock"){
				result = "it ain\'t no lie, bye, bye, bye.";
			}else{
				result = "stop playing those games";
			}
			
		}

		$("#wins").text(consecutiveWins);
		console.log(result);
		
		$("#player-hand").removeClass("rock").removeClass("paper").removeClass("scissors").addClass(player);
		$("#cpu-hand").removeClass("rock").removeClass("paper").removeClass("scissors").addClass(computer);
		$("#result-text").text(result);
		
		$("#results").hide().slideDown(100);
	}
	
	// this is where you come in. send consecutiveWins to the server and get back the high scores. update the list.
	
	var updateHighScores = function() {
		playerName = $("#playerName").val();
		//console.log(playerName + ": " + consecutiveWins);
		
		var playerInfo = {name:playerName,wins:win,losses:loss,ties:tie};
		var jsonString = JSON.stringify(playerInfo);
		//console.log(jsonString);
		
		//get and post for PHP both going to address
		//$.post() for sending data (appending query string does get)
		//could also do $.get() to send something to PHP, for actions
		//uses query string, appends things to the URL
		$.post("./includes/writeTo.php", playerInfo);
		//{data:jsonString}); 
		//{name:playerName,wins:win,losses:loss,ties:tie,games:win+loss+tie} );
			}
	
	var goToScreen = function(screen) {
		$("#" + currentScreen).fadeOut(1000,function() {
			currentScreen = screen;
			$("#" + currentScreen).fadeIn(1000);
		});
	}
	
}

$(document).ready(onPageReady);