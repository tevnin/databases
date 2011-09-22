var who = {
	name: "Tami Evnin",
	school: [
		{
			name: "Parsons The New School For Design",
			year: "2010 to Present"
		},
		{
			name: "UC Berkeley",
			year: "2005 to 2009"
		}
	],
	work: [
		{
			title:"Teaching Fellow",
			company: "Parsons The New School For Design",
			year: "2011",
			text: "Taught Code in bootcamp kthxbye"
		},
		{
			title:"Front-end Engineering Intern",
			company: "BankSimple",
			year: "2011",
			text: "Made cool shit that never got used"
		}
	],
	achievements: [
		{
			award:"Best Scene in Town Mobile Challenge Winner",
			from: "7scenes & Waag Society",
			year: "2011"
		},
		{
			award:"Winner",
			from: "Me",
			year: "always"
		}
	],
	recs: [
		{
			name:"Nidhi",
			title: "Classmate",
			text: "Tami is the best."
		},
		{
			name:"Jonathan",
			title: "Classmate",
			text: "See Nidhi\'s comment."
		},
		{
			name:"Tami",
			title: "Me",
			text: "Ahh yeah."
		}
	]	
}

jQuery(document).ready(function(){
	
	var go = function doResume(){
		$("#school").append("<ul>");
			for(var i=0; i<who.school.length; i++){
				$("#school").append("<li><h4>"+who.school[i].name+"</h4><p>"+who.school[i].year+"</p></li>");
			}
		$("#school").append("</ul>");
		
		$("#work").append("<ul>");
			for(var i=0; i<who.work.length; i++){
				$("#work").append("<li><h4>"+who.work[i].title+"</h4><p><span>"+who.work[i].company+"</span> "+
				who.work[i].year+"</p><p>"+who.work[i].text+"</p></li>");
			}
		$("#work").append("</ul>");
		
		$("#achievements").append("<ul>");
			for(var i=0; i<who.achievements.length; i++){
				$("#achievements").append("<li><h4>"+who.achievements[i].award+"</h4><p><span>"+who.achievements[i].from+"</span> "+
				who.achievements[i].year+"</p></li>");
			}
		$("#achievements").append("</ul>");
		
		$("#recs").append("<ul>");
			for(var i=0; i<who.recs.length; i++){
				$("#recs").append("<li><h4>"+who.recs[i].name+"</h4><p><span>"+who.recs[i].title+"</span> "+
				who.recs[i].text+"</p></li>");
			}
		$("#recs").append("</ul>");

	}
	
	$("#top h1").click(go);
	
	 /*	TOGGLE
		$(#top h1).toggleClass("active");
		var fontSize = parseFloat($("#top h1").css("font-size");
		$("#top h1").css("font-size":(fontSize+1)+"px");
		*/
		
		/*	HOW TO DO CALLBACK
			var onJSONLoaded = function(json){
				json.element;
			}
			$.getJSON("http://barf.com",onJSONLoaded);
			
			
			or
			
			$.getJSON("http://barf.com",function(json){
				json.element;
			});
		*/
	
	
});
