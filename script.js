let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Score:" + " " + playerScore);
        console.log("Computer Score:" + " " + computerScore);
    }
}

function result(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You have won!";
    } else if (playerScore < computerScore) {
        return "The Computer has won!";
    } else {
        return "It's a tie! Better luck next time!";
    }
}

console.log(game(), result());
//paper beats rock, rock beats scissors, scissors beats paper