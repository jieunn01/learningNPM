function getData() {

    // use the Fetch API to retrieve some data - eg. dog fetch 
    fetch("./includes/functions.php")
    .then(res => res.json()) //unpack the API response (trun it back into plain JS format file)
    .then(data => {
        // console.table(data); //what's inside?

        // do anything else here that we want with our data
        // call a function to generate our dynamic content
        buildTeam(data[0]);
    })
    .catch(error => console.error(error)); // catch and report any errors 
}

export { getData } 