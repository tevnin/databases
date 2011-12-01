$(document).ready(function(){
	
	var canvas = document.getElementById("chart");
  var context = canvas.getContext("2d");
	
	$("h1").click(function(){
		// $("#images").show();
		// $("img#1").fadeIn("slow");
		start();
	});

	$("#chart").click(function(e){
	    getMousePos(e);
	 });
	
	function getMousePos(e) {
		var x;
		var y;
		if (e.pageX || e.pageY) { 
		  x = e.pageX;
		  y = e.pageY;
		}
		else { 
		  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
		  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
		} 
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		
		console.log("x: "+x+", y: "+y);
	}
	
	function start() {
		context.font = "bold 16px sans-serif";
		// context.textAlign = "center";
		context.rectMode = "center"
		// context.fillStyle = "#ff0000"; //color
		
		getFlow("1");
	}
	
	function getNext() {
		
	}
	
	
	function getFlow(questionNum) {
		
			//post to/from flow database
			$.post("./includes/flowchart.php", function(data) {
				//having "goToScreen()" here loads the screen once $.post() has completed
				//goToScreen("highscores");
				
				var next1, next2;
				
				//loop through the data
				for(var i=0; i<data.length; i++){
					
					//start with the first question
					if(data[i].number == questionNum){
						context.strokeRect(18,3,360,60);
						context.fillText(data[i].text, 30, 38);
						
						//get following questions
						next1 = data[i].after.first;
						next2 = data[i].after.second;

					}
					
					//print following question #1
					if(data[i].number == next1){
							context.fillText(data[i].before.answer, 30, 90);
					}
					//print following question #2
					if(data[i].number == next2){
							context.fillText(data[i].before.answer, 400, 38);
					}
				}
				console.log(data);
				

			},"json");

	}

	
	
	
});