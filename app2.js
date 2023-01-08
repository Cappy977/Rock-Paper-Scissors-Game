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

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type in rock, paper or scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
}

game()