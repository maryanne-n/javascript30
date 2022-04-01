let randomNum = Math.floor(Math.random() * 100 + 1);
const guessBox = document.querySelector("#guessBox");
let guessCount = 1;
let guesses = document.querySelector(".guesses");
let result = document.querySelector(".result");
let hint = document.querySelector(".hint");
let restartButton = document.querySelector(".restartButton");
const submitButton = document.querySelector(".submitButton");

function checkGuess() {

    let userGuess = Number(document.querySelector("#guessBox").value);    

    // If user guesses a non-number
    if (isNaN(userGuess)) {
        console.log("Not a number");
        event.preventDefault();
        guesses.textContent + " ";
        hint.textContent = "Please enter a number from 1-100 inclusive."
    
        // If user guess an ineligible number 
    } else if (userGuess < 1 || userGuess > 100) {
        console.log("Number too small/big");
        event.preventDefault();
        guesses.textContent + " ";
        hint.textContent = "Please enter a number from 1-100 inclusive."

    } else {
        // If user guesses an eligible number
        console.log(guessCount);
        event.preventDefault();

        if (guessCount === 1) {
            guesses.textContent = "Previous Guesses: ";
        }

        guesses.textContent += userGuess + " ";

        // If user guesses the number
        if (userGuess === randomNum){
            result.textContent = "Woohoo! You won! Here is your internet prize <3";
            hint.textContent = ""
            guesses.textContent = "Number of guesses you took: " + guessCount;
            gameOver();   
            
        // If user takes more than 10 tries to guess  
        } else if (guessCount === 10) {
            result.textContent = "Game Over :( Try again?";
            hint.textContent = "";
            console.log("TOo many guesses");
            gameOver(); 

        // If user guesses wrong but has had less than 10 tries
        } else {
            result.textContent - "Wrong!"            
            if (userGuess > randomNum) {
                hint.textContent = "Try a lower number.";
            } else if (userGuess < randomNum) {
                hint.textContent = "Try a higher number.";
            } 
        }

        guessCount++;
    }

    guessBox.value = "";
    guessBox.focus();
}

function gameOver() {

    // Show Restart button 
    restartButton.style.visibility = "visible";

    // Disable fields
    guessBox.disabled = true;
    submitButton.disabled = true;
    submitButton.style.cursor = "default";

}

function restartGame() {

    // Hide Restart button 
    restartButton.style.visibility = "hidden";

    // Re-enable guess fields and submit button
    guessBox.disabled = false;
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";

    // Resets result, hint and guess fields
    document.querySelectorAll(".reset").forEach(element => element.textContent = "");

    // Reset counter
    guessCount = 1;

    // Generate new random number 
    randomNum = Math.floor(Math.random() * 99 + 1);

}