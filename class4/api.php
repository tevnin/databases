<?php require("resume.php");
			require("return_as_json.php");
		
	
	//marshalling!
	//echo json_encode($me);
	return_as_json($me);
	
	echo json_decode('{
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
	}');

?>