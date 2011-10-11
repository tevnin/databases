$.get('http://hilalkoyuncu.com/mylinkedin/api.php', null, function(data){
	console.log(data);
	
	$("header h1").append(data.name);
	
	for(var i=0; i < data.education.length; i++){
		$("#school ul").append("<li><h4>"+data.education[i].schoolName+"</h4><p>"+data.education[i].graduationDate+"</p>");
	}
	
	var inst = "institution:";
	for(var i=0; i < data.workExperience.length; i++){
		$("#work ul").append("<li><h4>"+data.workExperience[i].jobTitle+"</h4>");
		$("#work ul li").append("<p><span>"+data.workExperience[i].inst+"</span></p>");
		$("#work ul li").append("<p>"+data.workExperience[i].date+"</p>");
	}
	
	for(var i=0; i < data.awards.length; i++){
		$("#achievements ul").append("<li><h4>"+data.awards[i].awardName+"</h4>");
		for(var j=0; j< data.awards[i].dateReceived.length; j++){
			$("#achievements ul li").append("<p>"+data.awards[i].dateReceived[j]+"</p>");
		}
	}
	
	for(var i=0; i < data.recommendations.length; i++){
		$("#recs ul").append("<li><h4>"+data.recommendations[i].PersonName+"</h4>");
		$("#recs ul li").append("<p>"+data.recommendations[i].Value+"</p>");
	}
	
}, "JSONP");