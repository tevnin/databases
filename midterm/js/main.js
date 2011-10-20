var onPageReady = function() {
	var consecutiveWins = 0;
	var currentScreen = "game";
	var win = 0;
	var loss = 0;
	var tie = 0;

	$("#results").hide();

	// who beats who
	var gameRules = { paper:"rock",rock:"scissors",scissors:"paper" };
	
	$("#game #highscore-button").click(function() { 
		goToScreen("highscores");
	});
	$("#highscores #back-button").click(function() { goToScreen("game");});
	$("header h1").click(function() { goToScreen("game");});
	
	$(".game-choice").click(function() {
		var playerChoice = $(this).attr('data-value');

		var random=Math.floor(Math.random()*3);
		var computerChoice; 
		if(random == 0) computerChoice = "paper";
		else if(random == 1) computerChoice = "rock";
		else computerChoice = "scissors";
		
		calculateResults(playerChoice,computerChoice);
	});
	
	var calculateResults = function(player,computer) {
		var result;
		if(computer == player) {
			tie=1;
			updateHighScores();
			result = "It's a tie.";
			
		}
		else if(gameRules[player] == computer) {
			win=1;
			updateHighScores();
			result = "You win!";
			consecutiveWins++;
			
		}
		else {
			loss=1;
			updateHighScores();
			consecutiveWins = 0;
			result = "You Lose.";
			
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
		var playerName = $("#playerName").val();
		console.log(playerName + ": " + consecutiveWins);
		
		var testObject = {name:playerName,wins:win,losses:loss,ties:tie};
		var jsonString = JSON.stringify(testObject);
		console.log(jsonString);
		
		//get and post for PHP both going to address
		//$.post() for sending data (appending query string does get)
		//could also do $.get() to send something to PHP, for actions
		//uses query string, appends things to the URL
		$.post("./includes/mongo.php", testObject );
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