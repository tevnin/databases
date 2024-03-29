$(document).ready(function(){

	var userFlow = [];
	var userName = "unknown";
	var userEmail;
	var userProject = "1";
	var updateUser;
	
	/****** REGISTER USER *******/
	/****** START FLOWCHART *******/
	$("#start").live("click",function(){
		userName = $("#name").val();
		userEmail = $("#email").val();
		userProject = $("#project").val();
		//userFlow = [];
		
		$("#intro").animate({"margin-top": "-=436px"}, "slow").fadeOut(1000);
		$("#flow").empty().fadeIn(1000);
		start();
		
		var classQ = $(this).attr("class");
		if(classQ == "saveUser"){
			register();
			$("#register").html("<h3>"+userName+" registered & logged in!</h3>").fadeIn();
		}
		
		
		$(this).animate({
		    position: "relative",
		    "text-align": "left",
				"font-size":"16px"
		 }, 1000, function() {
		    $(this).html("re-start");
				$(this).removeClass("saveUser");
		 });

	});
	
	function start() {
		getFlow("1");
	}

	/****** GET NEXT QUESTION *******/
	$(".arrow").live("click",function(){
		var pID = $(this).attr("id");
		$(this).css("background-color","#FF5335");
		console.log("CLICKED! "+ pID);
		
		var split = pID.split("arrow");
		var id = split[1];
		
		getFlow(id);
	  
		userFlow += id + " ";
		//console.log(userFlow);
		
		$(".question").animate({"margin-top": "-=520px"}, "slow");
	});
	

	/****** GET QUESTION AND FOLLOWING ANSWERS *******/
	function getFlow(questionNum) {
		
			//post to/from flow database
			$.post("./includes/flowchart.php", function(data) {
				
				var next1, next2, id;
				
				//loop through the data
				for(var i=0; i<data.length; i++){
					
					//start with the question
					if(data[i].number == questionNum){
						
						if(data[i].after.first == ""){
							//highlight answer
							$("#flow").append("<div id='q" + data[i].number+ "' class='answer'><h4>"+data[i].text+"</h4>");
							$("#q" + data[i].number).fadeIn(1000);
							$("#register").html("<h3><span class='replay'>replay</span> "+userName+"'s flow</h3>");					
							register();
						}else{
							//show next question
							$("#flow").append("<div id='q" + data[i].number+ "' class='question'><h4>"+data[i].text+"</h4>");
							$("#q" + data[i].number).fadeIn(1000);
						}
						
						//get following questions
						next1 = data[i].after.first;
						next2 = data[i].after.second;
						id = data[i].number;
						
					}
					
					//print arrow #1 (check if it belongs to THIS question)
					if(data[i].number == next1 && data[i].before.id == id){
							$("#q" + id).append("<p id='arrow" + next1 + "' class='arrow left'>" + data[i].before.answer + "</p>");
							$("#arrow" + next1).fadeIn(2000);
							
					}
					//print arrow #2 (check if it belongs to THIS question)
					if(data[i].number == next2 && data[i].before.id == id){
							$("#q" + id).append("<p id='arrow" + next2 + "' class='arrow right'>" + data[i].before.answer + "</p>");
							$("#arrow" + next2).fadeIn(2000);
					}
				}
				//console.log(data);
				
			},"json");

	}
	
	function register(){
		console.log(userFlow);
		var userInfo = {name:userName,email:userEmail,project:userProject,flow:userFlow};

		$.post("./includes/saveFlow.php", userInfo);
		
	}
	
	/****** REPLAY FLOW *******/	
	$("#register").click(function(){
		$("#flow").css("overflow","visible");
		//$(".answer").animate({"margin-top": "0px"}, "slow");
		$(".question").css("height","200px").animate({"margin-top":"0px"}, 3000);
		
	});
	

});