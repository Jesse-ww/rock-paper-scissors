const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const win = "win";
const lose = "lose";
const tie = "tie";

var result = "";
var pcChoice = "";
var choices = [rock, paper, scissors];

var rockBtn = document.getElementById("rock-btn");
var paperBtn = document.getElementById("paper-btn");
var scissorsBtn = document.getElementById("scissors-btn");
var resultText = document.getElementById("result-text");

rockBtn.addEventListener("click", callRock);
paperBtn.addEventListener("click", callPaper);
scissorsBtn.addEventListener("click", callScissors);

function makePcChoice () {
    pcChoice = choices[getRandomInclusive(0, 2)];
}

function callRock () {
    displayResult("rock");
}

function callPaper () {
    displayResult("paper");
}

function callScissors () {
    displayResult("scissors");
}

function displayResult (btnStr) {
    makePcChoice();
    result = determineResult(btnStr, pcChoice);
    if (result == win) {
        resultText.textContent = "You won!";
        
    } else if (result == lose) {
        resultText.textContent = "You lost..";
    } else {
        resultText.textContent = "It was a draw.";
    }
}

function determineResult (player, pc) {
    var value;
    if (pc == player) {
        value = tie;
    } else {
        switch (player) {
            case rock:
                if (pc == scissors) {
                    value = win;
                } else {
                    value = lose;
                }
                break;

            case paper:
                if (pc == rock) {
                    value = win;
                } else {
                    value = lose;
                }
                break;
            
            case scissors:
                if (pc == paper) {
                    value = win;
                } else {
                    value = lose;
                }
                break;
        }
    }
    
    return value;
}

function getRandomInclusive (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}