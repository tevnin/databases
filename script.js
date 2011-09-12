var myArray = ["zero","one","two","three","four"];
var myObject = {something:"a value", somethingElse:"another value"};

console.log(myObject["something"]);
console.log(myObject.something); //same as above, in dot notation
myObject["somethingElseCompletely"] = "yet another value"; //adds another object to myObject
myObject.somethingElseCompletely = "yet another value"; //same as above, in dot notation

alert(myArray[0]); // zero
alert(myArray[4]); // four

myArray.length;
myArray[myArray.length] = "five"; //add value to the end of myArray (same as below)
myArray.push("five"); //add value to the END of myArray
myArray.unshift("before zero"); //add value to the BEGINNING of myArray
alert(myArray[0]); // before zero

myArray.splice(3,false,"new element"); //adds new element between two and three
myArray.pop(3); //remove something from the END of myArray
myArray.shift(); //remove something from the BEGINNING of myArray

for(var i=0; i<myArray.length; i++){
	document.write(myArray[i]);
	console.log(myArray[i]);
}

//homework
//consider your iTunes Playlist
//console.log a list of songs: artist, title, album