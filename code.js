/*these are our 2 variables we use to keep track of how many wins and jackpots the player has gotten*/
let totalWins = 0;
let totalJackpots = 0;

/*this is our main function, it handles the math, and if statements*/
function playDabo(){
    /* our variables for the wheel spins, by setting it to *50 it picks a numbe 1-49.999, math.floor rounds it to 49, and the + 1 makes sure it can go up to 50*/
    let wheelSpin = Math.floor(Math.random() * 50) + 1;
    let playerSpin = Math.floor(Math.random() * 50) + 1;
    /*sets up that our difference, which tells us our final results, is the wheel spin minus the players spin*/
    let difference = wheelSpin - playerSpin;
/*displays the result of each spin, the text wheel spina and you spun are always up, and after where it says +wheelSpin or playerSpin, shows the number the math.floor and math.random resulted in for each */
    document.getElementById("wheelResult").textContent = "Wheel Spun: " + wheelSpin;
    document.getElementById("playerResult").textContent = "You Spun: " + playerSpin;
/*the if statements set it up so if the player rolls equal to the wheel, we get a difference of 0, in which case the first statement become true and we get jackpot text and our totalJackpots goes up by 1, and it runs the updateJackpotWins function,*/
        if (difference === 0){
            document.getElementById("finalStatus").innerHTML = "<h1>🎉🎉🎉JACKPOT🎉🎉🎉</h1>"
            totalJackpots = totalJackpots + 1;
            updateJackpotWins(totalJackpots);
        }
        /*if we get more than 0 it checks for the first if statement which will be determined false and moves on to the first else if statement and it will be true so it will display House Wins*/
        else if (difference > 0){
            document.getElementById("finalStatus").innerHTML = "<h1>House Wins</h1>"
        }
        /*if the first 2 statements are false then it defaults to the else statement which prints our You Win!!!!, and adds 1 to your total wins and finally runs the updateDaboWins function*/
        else{
            document.getElementById("finalStatus").innerHTML = "<h1>You Win!!!!</h1>"
            totalWins = totalWins + 1;
            updateDaboWins(totalWins);
        }

}
/*this function runs a display on screen which keeps track of your total wins by checking the variable totalWins which goes up by 1 each time you win, and it also prints it into console*/
function updateDaboWins(){
    document.getElementById("currentWinsDisplay").textContent = "Total Wins: " + totalWins;
    console.log("Current Wins: " + totalWins)
}
/*this function similary runs a display on screen which keeps track of your total jackpots by checking the variable totalJackpots which goes up by 1 each time you win the Jackpot, and it also prints it into console*/
function updateJackpotWins(status){
    document.getElementById("currentJackpotDisplay").textContent = "Total Jackpots: " + status;
    console.log("Current Jackpots: " + status)
}
