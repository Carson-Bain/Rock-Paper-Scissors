let value = Math.random();
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

const youWin = "You Win!";
const youLose = "You Lose!";
const tie = "It's a tie!";

function getComputerChoice() {  
    if (value <= .33) {
        return rock;
    } else if (value >= .34 && value <= .67) {
        return paper;
    } else {
        return scissors;
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection = "Rock" && computerSelection == "Rock") {
        return console.log(tie);
    } else if (playerSelection = "Rock" && computerSelection == "Paper") {
        return console.log(youLose);
    } else if (playerSelection = "Rock" && computerSelection == "Scissors") {
        return console.log (youWin);
    }
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(value);
  console.log(playRound(playerSelection, computerSelection));



