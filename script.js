const playerSelectionDisplay = document.querySelector('.playerSelection');
const computerSelectionDisplay = document.querySelector('.computerSelection');
const resultDisplay = document.querySelector('.result');
const selections = document.querySelectorAll(".choiceButton");
const playAgain = document.createElement('BUTTON');
const statContainer = document.querySelector('.stat-container');
playAgain.classList.add('restart-button');
playAgain.textContent = "PLAY AGAIN!";
playAgain.addEventListener('click', startGame);

let playerSelection;
let computerSelection;
let result;
let finalScore;

let playerScore = 0;
let computerScore = 0;

//audio
const winnerAudio = document.querySelector('#winnerAudio');
const choiceAudio = document.querySelector('#choiceAudio');

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
    if (choiceAudio.currentTime != 0) {
        choiceAudio.pause();
        choiceAudio.currentTime = 0;
        playChoiceSound(choiceAudio);
    } else {
        playChoiceSound(choiceAudio);
    }
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
            result = "YOU WIN!";
            winnerAudio.play();
            resultDisplay.innerHTML = result;
        } else if (playerScore < computerScore) {
            result = "YOU LOSE!";
            resultDisplay.innerHTML = result;
        } else {
            result = "IT'S A TIE!";
            resultDisplay.innerHTML = result;
        }
        statContainer.appendChild(playAgain);
   }
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
    selections.forEach(selections => selections.disabled = true);
}

function startGame() {
    winnerAudio.pause();
    winnerAudio.currentTime = 0;
    resultDisplay.innerHTML = '';
    playerSelectionDisplay.innerHTML = '';
    computerSelectionDisplay.innerHTML = '';
    selections.forEach(selections => selections.disabled = false);
    statContainer.removeChild(playAgain);
}

function playChoiceSound(choiceAudio) {
    choiceAudio.play();
    if (choiceAudio.currentTime > 0.001) {
        choiceAudio.pause();
        choiceAudio.currentTime = 0;
    }
}
//paper beats rock, rock beats scissors, scissors beats paper