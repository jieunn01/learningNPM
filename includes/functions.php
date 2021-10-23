<?php 
    // include the connect file so that we can access our DB
    include("connect.php");

    // store the SQL query in a variable
    $query = "SELECT * FROM profs";

    //this is the database result -> the raw data that SQl gives us, series rows -> js form translate
    $runQuery = $pdo->query($query);

    // store each row of data in an empty array (gets processed in the while loop below)
    $result = array();

    // process our DB result and make something we can use with AJAX
    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

    // send the DB result back to our JS file as a JSON object
    echo (json_encode($result));