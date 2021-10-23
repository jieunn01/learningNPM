<?php
    //store the processed results in a variable
    $result = array();

    // if a user passes an ID via a query strign (?id=1)
    // then we should retrieve the row of data that matches and pass it back tothe app
    function getOneProf($conn, $prof) {
        $query = "SELECT * FROM profs WHERE id='".$prof."'";
        // ******** query change

        //this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);

        //process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
           }
   
           return $result;
    }

    //if a user DOESN'T pass an id, then they must want ALL the data so retrieve ALL of it 
    // and pass it back to the app

    function getAllProfs($conn) {
        //echo "inside get all";

        $query = "SELECT * FROM profs";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }