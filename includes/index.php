<?php
    require("connect.php");
    require("functions.php");

   // filter the incoming basic request and call the appropriate functino
   // (these live in functions.php)
   if (isset($_GET["id"])) {
       // ******* instead of id another identified portfolio piece
       
       // this is the id that the user is passing to the script (1, 2, 3 etc) => ?id=1
       //it referes to the row of data that we want to retrieve from the DB
       $id = $_GET["id"]; 

       // create a variable to hold the result of the database request
       $result = getOneProf($pdo, $id);
   } else {
       $result = getAllProfs($pdo);
   }

   // send the database result (our data) back to the javascript file
   echo json_encode($result);