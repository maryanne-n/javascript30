let randomNum = Math.floor(Math.random() * 99 + 1);
const guessBox = document.querySelector("#guessBox");
let guessCount = 1;
let guesses = document.querySelector(".guesses");
let result = document.querySelector(".result");
let hint = document.querySelector(".hint");
let restartButton = document.querySelector(".restart");
const submitButton = document.querySelector(".submitButton");

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
        gameOver();        
    } else if (guessCount === 10) {
        result.textContent = "Game Over :( Try again?";
        hint.textContent = "";
        console.log("TOo many guesses");
        gameOver();   
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

function gameOver() {
    restartButton.style.visibility = "visible";
    guessBox.disabled = true;
    submitButton.disabled = true;
    restartButton.style.visibility = "visible";   
}

function restartGame() {
    restartButton.style.visibility = "hidden";
    guessBox.disabled = false;
    submitButton.disabled = false;
    result.textContent = "";
    hint.textContent = "";
    result.textContent = "";
    guesses.textContent = "";
    guessCount = 1;
    randomNum = Math.floor(Math.random() * 99 + 1);
}


