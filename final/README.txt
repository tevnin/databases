To run:
1. Create a local Mongo database.  I called mine "dbFinal".
2. If you called the database anything other than "dbFinal", please go to includes/mongo.php and edit line 7 to point to the correct database.
3. Open rockmongo-export-dbFinal-1323792086.js and run the commands included in Terminal or other MongoDB manager.
4. That's it!  The database should be set up to run the right stuff.


At this point you should be able to:
1. Go through the questions and arrive at an answer.
2. Replay your flow once completed.
3. See saved user flow's by running db.users.find() - I haven't yet implemented any sort of "show saved" interaction in the web app :-/