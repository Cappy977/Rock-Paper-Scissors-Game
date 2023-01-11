let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else if (computerChoice === 2) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper"
    }
}

const scorePlayer = document.querySelector("#playerScore");
const scoreComputer = document.querySelector("#computerScore");

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function () {
    const playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scorePlayer.innerText = `Player: ${playerScore}`;
    scoreComputer.innerText = `Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert("Player won!")
    } else if (computerScore === 5) {
        alert("Computer won!")
    }
})


const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function () {
    const playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scorePlayer.innerText = `Player: ${playerScore}`;
    scoreComputer.innerText = `Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert("Player won!")
    } else if (computerScore === 5) {
        alert("Computer won!")
    }
})

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function () {
    const playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scorePlayer.innerText = `Player: ${playerScore}`;
    scoreComputer.innerText = `Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert("Player won!")
    } else if (computerScore === 5) {
        alert("Computer won!")
    }
})
