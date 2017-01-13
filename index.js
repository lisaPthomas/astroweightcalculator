/* Element to get the Id from html to make it funtional with the array*/
var selectList = document.getElementById("selectedPlanet");

var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

// Loop creates options for selected drop down. 
for (var i = 0; i < planets.length; i++) {
    // puts the planet names into selector//
    var newOption = document.createElement("option");
    //text for planets in the array
    newOption.innerText = planets[i].planet;

    selectList.appendChild(newOption);
};

// Variable to access selected index

var arrayList = selectList.selectedIndex;


// Get user weight and get the user planet gravity

function calculateWeight() {
    var weightPerson = document.getElementById('weight').value;
    var arrayList = selectList.selectedIndex;
    var planetGravity = planets[arrayList].gravity;
    var totalWeight = weightPerson * planetGravity


    // writes the calculated total on the webpage

    var newParagraph = document.createElement("p");

    var calculateButton = document.getElementById("button");
    var planetName = planets[arrayList].planet

    newParagraph.innerHTML = "Your weight on " + planetName + " is " + totalWeight + " lbs";

    calculateButton.appendChild(newParagraph);



}
