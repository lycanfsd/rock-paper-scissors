const playerSelectionDisplay = document.querySelector('.playerSelection');
const computerSelectionDisplay = document.querySelector('.computerSelection');
const resultDisplay = document.querySelector('.result');
const selections = document.querySelectorAll(".choiceButton");
let playerSelection;
let computerSelection;
let result;

let playerScore = 0;
let computerScore = 0;

// Create button event listeners that call playRound() w/ correct playerSelection
selections.forEach(selections => selections.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    playerSelectionDisplay.innerHTML = playerSelection;
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    computerSelectionDisplay.innerHTML = computerSelection;
    playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    result = `${playerScore} vs ${computerScore}`
    resultDisplay.innerHTML = result;
    console.log(playerScore, computerScore, isWinner(playerScore, computerScore));
}));

function getComputerChoice () {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
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

function isWinner(playerScore, computerScore) {
   if (playerScore == 5 || computerScore == 5) {
        endGame();
        if (playerScore > computerScore) {
            return "YOU WIN!"
        } else if (playerScore < computerScore) {
            return "YOU LOSE!"
        } else {
            return "IT'S A TIE!"
        }
   }
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
    selections.forEach(selections => selections.disabled = true);
}



//paper beats rock, rock beats scissors, scissors beats paper