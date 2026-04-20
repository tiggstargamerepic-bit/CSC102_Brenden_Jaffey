//my name is Brenden Jaffey and this is my JS table code
//sets up the const for the tables rows
const languageData = [
    //our first of 5 rows, genre is our first collumn, role is our second, and marketShare is our third
    { genre: "RPG", role: "Console/PC", marketShare: "21%" },
    { genre: "Action-Adventure", role: "Console", marketShare: "21%" },
    { genre: "Survival", role: "PC", marketShare: "18%" },
    { genre: "Shooters", role: "PC", marketShare: "15%" },
    { genre: "Strategy", role: "Mobile/PC", marketShare: "12%" }
];//closes out the const

//sets up our function to create the table
function createTable() {
    //sets up the function to find where to put the table on the html page
    const container = document.getElementById('table-container');
    //creates names for each const for the document to remember     
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
//sets up our top row to display what each collumn is in order from game genre to primary console to market sales using our thead constant
    thead.innerHTML = `
        <tr>
            <th>Game Genre</th>
            <th>Primary Console</th>
            <th>Market Sales</th>
        </tr>
    `;
//now we set up the tables body, this line just tells is to start at 0 and go until the it hits the end of the language data list
    for (let i = 0; i < languageData.length; i++) {
        //sets up const for our rows
        const row = document.createElement('tr');
        //sets up our rows to go in order each time it runs so it matches our header
        row.innerHTML = `
            <td>${languageData[i].genre}</td>
            <td>${languageData[i].role}</td>
            <td>${languageData[i].marketShare}</td>
        `;
        //adds the row into the table at the bottom, then makes the next below that one
        tbody.appendChild(row);
    }
//this puts the head and body into the table
    table.appendChild(thead);
    table.appendChild(tbody);
//this pushes the table into the actual page sot he user can actually see it
    container.appendChild(table);
}
//sets up so it creates the table once the window loads
window.onload = createTable;