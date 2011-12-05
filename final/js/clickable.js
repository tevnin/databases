$(document).ready(function(){
	
	//assynchronous
	//xml http request (kernal of ajax, wrapped into json)
	//$.ajax = more specific
	
	var userFlow = new Array();
	var userName = "unknown";
	var userEmail;
	var userProject = "1";
	
	/****** REGISTER USER *******/
	$("#register h2").click(function(){
		$("#regForm").fadeToggle();
	});
	
	$("#submitBtn").click(function(){
		userName = $("#name").val();
		userEmail = $("#email").val();
		userProject = $("#project").val();	
		var userInfo = {name:userName,email:userEmail,project:userProject};

		$.post("./includes/register.php", userInfo, function(data){
			$("#register").html("<p>"+userName+" registerd & logged in!").fadeIn();
		});
		
		
		userFlow = userInfo;
	});
	
	/****** START FLOWCHART *******/
	$("#start").live("click",function(){
		
		$("#flow").empty();
		start();
		
		$(this).animate({
		    position: "relative",
		    "text-align": "left",
				"font-size":"20px"
		  }, 1000, function() {
		    $(this).html("re-start");
		  });
		
	});
	
	function start() {
		getFlow("1");
	}

	/****** GET NEXT QUESTION *******/
	$(".arrow").live("click",function(){
		//jumpScroll();
		var pID = $(this).attr("id");
		$(this).css("background-color","#FF5335");
		console.log("CLICKED! "+ pID);
		
		var split = pID.split("arrow");
		var id = split[1];
		
		getFlow(id);
	  
		userFlow += id + " ";
		//console.log(userFlow);
		
		$(".question").animate({"margin-left": "-=960px"}, "slow");
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
							$("#flow").append("<div id='q" + data[i].number+ "' class='answer'><h3>"+data[i].text+"</h3>");
							$("#q" + data[i].number).fadeIn(1000);
							
							var updateUser = {name: userName, project:userProject, flow: userFlow};
							$.post("./includes/saveFlow.php", updateUser);
						}else{
							//show next question
							$("#flow").append("<div id='q" + data[i].number+ "' class='question'><h3>"+data[i].text+"</h3>");
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
	
	function jumpScroll() {
	   	window.scroll(0,150); // horizontal and vertical scroll targets
	}

});