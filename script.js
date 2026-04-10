//My Name is Brenden Jaffey, I'm in CSC102, sorry for the delay(:
// Find the audio by its ID
var mySound = document.getElementById("stationAudio");
// Find the button
var playBtn = document.getElementById("playAudio");

var stopBtn = document.getElementById("stopAudio")

// Assign the function directly to the property
playBtn.onclick = function() {
    mySound.play(); // This is the built-in command to start audio
};

// Sets up what happens when the stop button is clicked
stopBtn.onclick = function() {
    // This is the command that silences the audio
    mySound.pause();
};
