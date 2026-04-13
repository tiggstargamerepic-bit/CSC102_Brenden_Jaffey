//My Name is Brenden Jaffey, I'm in CSC102
// Global variables to keep track of security stats
let successfulLogins = 0;
let failedAttempts = 0;

//the main function that handles the information
function checkSecurity(event) {
    //prevents the form from refreshing the page
    event.preventDefault();

    //our 2 variables for name and badge number, theres no actual numbers it just needs 3 digits
    let firstName = document.getElementById("fName").value;
    let badge = document.getElementById("badgeNum").value;
    //where the results display
    let statusArea = document.getElementById("statusDisplay");

    //String Manipulation
    //erases any spacesthe player adds so its one solid word when they submit
    let cleanName = firstName.trim();
    
    //decision logic, if/else
    //sets up so if player enters a name and a badge number which isnt 3 digits they fail and our fail imaeg and message show up
    if (cleanName === "" || badge.length !== 3) {
        //adds one to the total fails
        failedAttempts = failedAttempts + 1;
        //uses our innerHTML to display the access denied and its associated image
        statusArea.innerHTML = "<h2 class='error'>ACCESS DENIED</h2>" + "<img src='Fail.png' width='200' alt='Denied'>";
        updateStats("Denied");
    } 
    //if the badge number is 3 digits our else statment activates which is our access granted screen
    else {
        //adds one to the success'
        successfulLogins = successfulLogins + 1;
        //same as our failed statement this one shows the success message and image
        statusArea.innerHTML = "<h1 class='success'>ACCESS GRANTED" + "<h2 class='success'>WELCOME, " + cleanName.toUpperCase() + "</h2>" + "<img src='Pass.png' width='200' alt='Passed'>";
        updateStats("Granted");
    }
}

//a function to help display how many passes and fails, aswell as curret status
function updateStats(status) {
    console.log("Status: " + status);
    console.log("Successful Logins: " + successfulLogins);
    console.log("Failed Attempts: " + failedAttempts);
}

//assigns the function to the forms onsubmit property
document.getElementById("securityForm").onsubmit = checkSecurity;