$.get('http://hilalkoyuncu.com/mylinkedin2/api.php', null, function(data){
	console.log(data);
	
	$("header h1").append(data.name);
	
	//$("#school").click(function(){
		for(var i=0; i < data.education.length; i++){
			$("#school ul").append("<li><h4>"+data.education[i].schoolName+"</h4><p>"+data.education[i].graduationDate+"</p>");
		}
	//});
	
	for(var i=0; i < data.workExperience.length; i++){
		$("#work ul").append("<li><h4>"+data.workExperience[i].jobTitle+"</h4><p><span>"+data.workExperience[i].institution+"</span></p><p>"+data.workExperience[i].date+"</p");

	}
	
	var awardN, dates;
	
	for(var i=0; i < data.awards.length; i++){
		awardN = data.awards[i].awardName;
		$("#achievements ul").append("<li id='"+i+"'><h4>"+data.awards[i].awardName+"</h4>");
		
		for(var j=0; j< data.awards[i].dateReceived.length; j++){
			dates = data.awards[i].dateReceived[j];
			
				$("#achievements ul #"+i).append("<p>"+dates+"</p>");
			
		}
		
		
	}
	
	
	for(var i=0; i < data.recommendations.length; i++){
		$("#recs ul").append("<li><h4>"+data.recommendations[i].PersonName+"</h4><p>"+data.recommendations[i].Value+"</p>");
	}
	
}, "JSONP");