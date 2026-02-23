let totalWins = 0;
let totalJackpots = 0;

function playDabo(){
    let wheelSpin = Math.floor(Math.random() * 50) + 1;
    let playerSpin = Math.floor(Math.random() * 50) + 1;
    let difference = wheelSpin - playerSpin;

    document.getElementById("wheelResult").textContent = "Wheel Spun: " + wheelSpin;
    document.getElementById("playerResult").textContent = "You Spun: " + playerSpin;

        if (difference === 0){
            document.getElementById("finalStatus").innerHTML = "<h1>🎉🎉🎉JACKPOT🎉🎉🎉</h1>"
            totalJackpots = totalJackpots + 1;
            updateJackpotWins(totalJackpots);
        }
        else if (difference > 0){
            document.getElementById("finalStatus").innerHTML = "<h1>House Wins</h1>"
        }
        else{
            document.getElementById("finalStatus").innerHTML = "<h1>You Win!!!!</h1>"
            totalWins = totalWins + 1;
            updateDaboWins(totalWins);
        }

}

function updateDaboWins(){
    document.getElementById("currentWinsDisplay").textContent = "Total Wins: " + totalWins;
    console.log("Current Wins: " + totalWins)
}

function updateJackpotWins(status){
    document.getElementById("currentJackpotDisplay").textContent = "Total Jackpots: " + status;
    console.log("Current Jackpots: " + status)
}