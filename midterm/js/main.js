var onPageReady = function() {
	var consecutiveWins = 0;
	var currentScreen = "game";
	var win = 0;
	var loss = 0;
	var tie = 0;
	var playerName;
	
	$("#results").hide();
	$("#game").hide();
	$("#play-button").click(function(){
		$("#game").fadeIn(1000);
		$("#intro").fadeOut(1000);
		
	});

	// who beats who
	var gameRules = { paper:"rock",rock:"scissors",scissors:"paper" };
	
	$("#game #highscore-button").click(function() { 
		// goToScreen("highscores");
		
		//$.post("./includes/highScores.php?sort=wins"); then in PHP if($_GET["sort"] == "wins")
		//can add $.get() variables to $.post()
		//DRY = Don't Repeat Yourself
		$.post("./includes/highScores.php", function(data) {
			//having "goToScreen()" here loads the screen once $.post() has completed
			goToScreen("highscores");
			$("#highscores ol").empty();
			for(var i=0; i<data.length; i++){
				$("#highscores ol").append("<li><h4>" + data[i].name + "</h4> <p>has won " + data[i].wins + " games</p></li>");
			}

		},"json");

	});
	
	
	$("#highscores #back-button").click(function() { goToScreen("game");});
	$("header h1").click(function() { goToScreen("game");});
	
	$(".game-choice").click(function() {
		var playerChoice = $(this).attr('data-value');

		var random=Math.floor(Math.random()*3);
		var computerChoice; 
		if(random == 0) computerChoice = "paper"; //nsync
		else if(random == 1) computerChoice = "rock"; //bsb
		else computerChoice = "scissors"; //nkotb
		
		calculateResults(playerChoice,computerChoice);
	});
	
	var calculateResults = function(player,computer) {
		var result;
		var band1;
		var band2;
		
		if(computer == "paper"){
			band2 = "N*Sync";
		}else if(computer == "rock"){
			band2 = "Backstreet Boys";
		}else{
			band2 = "New Kids on the Block";
		}
		
		if(computer == player) {
			win = 0;
			loss = 0;
			tie = 1;
			updateHighScores();
			
			if(player == "paper"){
				result = "i just wanna be with you - tie!";
				band1 = "N*Sync";
			}else if(player == "rock"){
				result = "larger than life - tie!"
				band1 = "Backstreet Boys";
			}else{
				result = "hangin' tough - tie!";
				band1 = "New Kids on the Block";
			}
		}
		else if(gameRules[player] == computer) {
			win = 1;
			loss = 0;
			tie = 0;
			updateHighScores();

			if(player == "paper"){
				result = "you\'re tearin\' up my heart! - N*Sync wins!";
				band1 = "N*Sync";
			}else if(player == "rock"){
				result = "backstreet's back! - BSB wins!"
				band1 = "Backstreet Boys";
			}else{
				result = "you got the right stuff, baby! - NKOTB wins!";
				band1 = "New Kids on the Block";
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
				result = "it ain\'t no lie, bye, bye, bye. - N*Sync loses!";
				band1 = "N*Sync";
			}else if(player == "rock"){
				result = "ain\'t nothin' but a heartache - BSB loses!"
				band1 = "Backstreet Boys";
			}else{
				result = "stop playing those games - NKOTB loses!";
				band1 = "New Kids on the Block";
			}
			
		}

		$("#wins").text(consecutiveWins);
		console.log(result);
		
		$("#player-hand").removeClass("rock").removeClass("paper").removeClass("scissors").addClass(player);
		$("#band-text").html(band1 + " <span>vs.</span> " + band2);
		$("#cpu-hand").removeClass("rock").removeClass("paper").removeClass("scissors").addClass(computer);
		$("#result-text").text(result);
		
		$("#results").hide().slideDown(100);
	}
	
	// this is where you come in. send consecutiveWins to the server and get back the high scores. update the list.
	
	var updateHighScores = function() {
		playerName = $("#playerName").val();
		//console.log(playerName + ": " + consecutiveWins);
		
		var playerInfo = {name:playerName,wins:win,losses:loss,ties:tie,consec:consecutiveWins};
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