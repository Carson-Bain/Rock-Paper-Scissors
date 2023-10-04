const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock, Paper, or Scissors: ");
        if (choice == null) {
            continue;
        } 
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function checkWinner(playerSelction, computerSelection) {
    if (playerSelction == computerSelection) {
        return "Tie";
    } else if ((playerSelction == "rock" && computerSelection == "scissors") || (playerSelction == "scissors" && computerSelection == "paper") || (playerSelction == "paper" && computerSelection == "rock")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelction, computerSelection) {
    const result  = checkWinner(playerSelction, computerSelection);
    
    if (result == "Tie") {
        return "It's a Tie!";
    } else if (result == "Player") {
        return `You Win! ${playerSelction} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelction}`;
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
       const playerSelction = getPlayerChoice();
       const computerSelection = getComputerChoice();
       console.log(playRound(playerSelction, computerSelection)); 
       console.log("------------")
        if (checkWinner(playerSelction, computerSelection) == "Player") {
           scorePlayer++; 
        }  else if (checkWinner(playerSelction, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over!")
    if (scorePlayer > scoreComputer) {
        console.log(`Player was the winner with ${scorePlayer} points`);
    } else if (scorePlayer < scoreComputer) {
        console.log(`Computer was the winner with ${scoreComputer} points`);
    } else {
        console.log("We have a tie");
    }
}

game();

