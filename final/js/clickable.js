$(document).ready(function(){
	
	$("h2").click(function(){
		
		$("#flow").empty();
		start();
		$(this).html("re-start");
		
	});

	$(".arrow").live("click",function(){
		var pID = $(this).attr("id");
		$(this).css("background-color","#f00");
		console.log("CLICKED! "+ pID);
		
		var split = pID.split("w");
		var id = split[1];
		
		getFlow(id);
	    //getNext(e);
	});

	
	function start() {
		getFlow("1");
	}
	

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
							$("#flow").append("<h3 id='q" + data[i].number+ "' class='answer'>"+data[i].text+"</h3>");
						}else{
							//show next question
							$("#flow").append("<h3 id='q" + data[i].number+ "' class='question'>"+data[i].text+"</h3>");
						}
						
						//get following questions
						next1 = data[i].after.first;
						next2 = data[i].after.second;
						id = data[i].number;
						
					}
					
					//print arrow #1 (check if it belongs to THIS question)
					if(data[i].number == next1 && data[i].before.id == id){
							$("#flow").append("<p id='arrow" + next1 + "' class='arrow'>" + data[i].before.answer + "</p>");
					}
					//print arrow #2 (check if it belongs to THIS question)
					if(data[i].number == next2 && data[i].before.id == id){
							$("#flow").append("<p id='arrow" + next2 + "' class='arrow'>" + data[i].before.answer + "</p>");
							console.log("#arrow"+next2);
					}
				}
				//console.log(data);
				
			},"json");

	}

});