<?php

// connect
$m = new Mongo();

// select a database
$db = $m->comedy;

// select a collection (analogous to a relational database's table)
$collection = $db->cartoons;
$collection->drop();

// add a record
$obj = array( "title" => "Calvin and Hobbes", "author" => "Bill Watterson" , "foo" => $_GET["x"] );
$collection->insert($obj);

// add another record, with a different "shape"
$obj = array( "title" => "XKCD", "online" => true );
$collection->insert($obj);

// find everything in the collection
$cursor = $collection->find( array( "title" => new MongoRegex( "/^C/" ) ) );

// iterate through the results
foreach ($cursor as $obj) {
    echo $obj["title"] . "\n";
    echo $obj["foo"] . "\n";
}

echo 5 + 6;
?>
a
<?php echo "eliot"; ?>
