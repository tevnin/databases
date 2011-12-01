<?php

	// SQL = Simple Query Language
	// relational content
	// 
	// collections in Mongo = tables in mySQL
	// create DB in PHP myAdmin
			//	field = name
			//	type = dataType (int, float, string, etc)
			//	length/values = bytes in memory (usually 255, use 10 for positive #s)
			//	set ID as primary key
	
	// get info from mySQL through SQL language:
	
			// db.authors.find(); = SELECT * FROM authors;
			// db.authors.find({}, {firstname:1, lastname:1}); = SELECT firstname,lastname FROM authors;
			// db.authors.find({name:"Jamie"}); = SELECT * FROM authors WHERE name="Jamie";
			// db.authors.find().limit(10); = SELECT * FROM authors LIMIT 10;
			// db.authors.find().sort({firstname:1}).limit(10); = SELECT * FROM authors ORDER BY firstname ASC LIMIT 10;
			//db.authors.find().skip(20).limit(10); = SELECT * FROM authors LIMIT 20,10;
	
	//JOIN! this is what makes SQL cool
			// assumes author_id is always the id of the author
			// SELECT authors.firstname,authors.* FROM posts JOIN ON posts.author_id=authors.id WHERE author.name="Jamie"
	
	mysql_connect("localhost","username","password");
	mysql_select_db("evnin_tami");
	
	$result = mysql_query("SQL statement goes here"); //this returns mySQL cursor
	$result = mysql_query(SELECT * FROM authors);
	
?>