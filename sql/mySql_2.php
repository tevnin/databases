--five places in the databases, 10 tags, connected to places, add notes, do it in SQLPro
--------------------------------------------------------------------------

--This is a SQL statement or query
SELECT superheroes.*, secret_identities.name 
AS kitten 
JOIN ON superheroes.id=hero_to_secret_hero.id 
JOIN ON hero_to_secret_hero.id=secret_identities.id 
WHERE name="Batman";

/*returns:
id		name			kitten
1			Batman		Bruce Wayne
*/

--------------------------------------------------------------------------

SELECT superheroes.*, secret_identities.name 
AS recastName 
JOIN superheroes ON superheroes.id=hero_to_secret_hero.id 
JOIN secret_identities ON hero_to_secret_hero.id=secret_identities.id 
WHERE name="Robin";

/*returns:
id		name			recastName
4			Robin			Dick Grayson
4			Robin			Tim Drake
*/

--------------------------------------------------------------------------

/*
int = whole number
float = decimal number
varchar = simple (small) string
text = more text (blog post)
longtext = looooooong text (long blog post)
binary = image or mp3
datetime = date
enum = limited set of varchars that a field could be
bool = boolean
*/

--------------------------------------------------------------------------

--Mongo = db.superheroes.insert({name:"Otterman"});*/
INSERT INTO superheroes(name,secret_identity) 
VALUES ("Otterman","Tami"),("OtterFriend","Lara");

--Mongo = db.superheroes.remove({name:"Robin"});
DELETE FROM superheroes 
WHERE name="Robin";

--Mongo = db.superheroes.update({name:"Robin"},{$set:{name:"not batman"}});
UPDATE superheroes 
SET name="not batman" 
WHERE name="Robin"
LIMIT 1; --this will only update the first "Robin that I find"

-- ORGANIZES, THEN FINDS, THEN EDITS


SELECT tags.tag as kittens,places.* FROM tags JOIN places_to_tags ON tags.id=places_to_tags.tag_id JOIN places ON places.id=places_to_tags.place_id


--HW
/*
play around with this database
5 places
10 tags
connected to places
copy/paste statements into a txt file
send .sqs file
*/

--To attach tags to a place
--SELECT tags.tag,places.* FROM tags JOIN places_to_tags ON tags.id=places_to_tags.tag_id JOIN places ON places.id=places_to_tags.place_id

--To attach notes to a place
--SELECT notes.note,places.* FROM notes JOIN places_to_notes ON notes.id=places_to_notes.note_id JOIN places ON places.id=places_to_notes.place_id

--To attach tags and notes to a place
