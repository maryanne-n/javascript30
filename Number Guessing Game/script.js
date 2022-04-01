let randomNum = Math.floor(Math.random() * 99 + 1);
const guessBox = document.querySelector("#guessBox");
let guessCount = 1;
let guesses = document.querySelector(".guesses");
let result = document.querySelector(".result");
let hint = document.querySelector(".hint");
let restartButton = document.querySelector(".restart");
function checkGuess() {
    let userGuess = Number(document.querySelector("#guessBox").value);    
    console.log(guessCount);
    event.preventDefault();
    // const userGuess = Number(guessBox.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses: ";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNum){
        result.textContent = "Woohoo! You won! Here is your internet prize <3";
        hint.textContent = "No need for hints, since you're awesome and got this!"
        restartGame();
        restartButton.style.visibility = "visible";
    } else if (guessCount === 10) {
        result.textContent = "Game Over :("          
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

function restartGame() {
    restartButton.style.visibility = "hidden";
    result.textContent = "";
    hint.textContent = "";
    result.textContent = "";
    guesses.textContent = "";
    guessCount = 1;
    randomNum = Math.floor(Math.random() * 99 + 1);
}


