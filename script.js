let computer;
let player;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3 + 1);

    switch(randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
    return computer;
}

function getPlayerChoice() {
    player = prompt("Pick: Rock, Paper, or Scissors: ");
    
    return player;
}

function checkWinner() {
    if (player == computer) {
        return "Tie!"; 
    } else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You lose!";
    } else if (computer == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You lose!";
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You lose!";
    }   
}

function getScore() {
    if ((player == "Paper" && computer == "Rock") || (player == "Rock" && computer == "Scissors") || (player == "Scissors" && computer == "Paper")) {
        console.log("Your score is " + ++playerScore + "!");
    } else if ((computer == "Paper" && player == "Rock") || (computer == "Rock" && player == "Scissors") || (computer == "Scissors" && player == "Paper")) {
        console.log("Computer score is " + ++computerScore + "!");
    }
}

function playRound() {
    console.log(getPlayerChoice());
    console.log(getComputerChoice());
    console.log(checkWinner());
    getScore();
}


function game() {
    playRound();
    playRound(); 
    playRound(); 
    playRound(); 
    playRound();  
}

game();

