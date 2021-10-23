(() => {
    const  theTeam = document.querySelector("#team-members"),
        theTemplate = document.querySelector("#bio-template").content;

    //start with a fetch call
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

    function buildTeam(info) {
    
        // debugger;
        
        info.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            memberInfo[0].querySelector('img').src = `images/${person.biopic}`;
            memberInfo[1].textContent = person.name;
            memberInfo[2].textContent = person.role;
            memberInfo[3].textContent = person.nickname;

            //put the virtual panel in the team sevtion in our HTML page
            theTeam.appendChild(panel);
        })

    }

    // invoke the getData function 
    // OVERALL ! Fetching data, Converting it, Processing it 
    getData();
})()