// imports always go at the top
import { getData } from "./components/TheDataMiner.js";

(() => {
    const  theTeam = document.querySelector("#team-members"),
        theTemplate = document.querySelector("#bio-template").content;

    //start with a fetch call

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