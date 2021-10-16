(() => {
    const  theTeam = document.querySelector("#team-members"),
        theTemplate = document.querySelector("#bio-template").content;

    //start with a fetch call
    function getData() {

        // use the Fetch API to retrieve some data - eg. dog fetch 
        fetch("./data.json")
        .then(res => res.json()) //unpack the API response (trun it back into plain JS format file)
        .then(data => {
            console.table(data); //what's inside?

            // do anything else here that we want with our data
            // call a function to generate our dynamic content
            buildTeam(data);
        })
        .catch(error => console.error(error)); // catch and report any errors 
    }

    function buildTeam(info) {
        // first, get a referece to all of the people (the keys of the info object)
        let team = Object.keys(info);
        
        team.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            memberInfo[0].querySelector('img').src = `images/${info[person].biopic}`;
            memberInfo[1].textContent = info[person].name;
            memberInfo[2].textContent = info[person].role;
            memberInfo[3].textContent = info[person].nickname;

            //put the virtual panel in the team sevtion in our HTML page
            theTeam.appendChild(panel);
        })

        // debugger;
    }

    // invoke the getData function 
    getData();
})()