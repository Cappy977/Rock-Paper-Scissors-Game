let playerScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector("#playerScore");
const scoreComputer = document.querySelector("#computerScore");

const winningMsg = document.querySelector('#winningMsg')
const newGameBtn = document.querySelector('#newGameBtn')
newGameBtn.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    scorePlayer.innerText = `Player: ${playerScore}`;
    scoreComputer.innerText = `Computer: ${computerScore}`;
})


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
    const showWinner = setTimeout(function () {
        winningMsg.innerText = ''
        winningMsg.classList = ''
    }, 2000)
    if (playerSelection === computerSelection) {
        winningMsg.innerText = 'Tie!'
        winningMsg.classList = 'tie'
        return showWinner;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        winningMsg.innerText = 'You lose! Paper beats rock!'
        winningMsg.classList = 'looser'
        return showWinner;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        winningMsg.innerText = 'You win! Rock beats scissors!'
        winningMsg.classList = 'winner'
        return showWinner;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        winningMsg.innerText = 'You win! Paper beats rock'
        winningMsg.classList = 'winner'
        return showWinner;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        winningMsg.innerText = 'You lose! Scissors beats paper!'
        winningMsg.classList = 'looser'
        return showWinner;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        winningMsg.innerText = 'You lose! Rock beats scissors!'
        winningMsg.classList = 'looser'
        return showWinner;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        winningMsg.innerText = 'You win! Scissors beats paper!'
        winningMsg.classList = 'winner'
        return showWinner;
    }
}

const playGame = function () {
    scorePlayer.innerText = `Player: ${playerScore}`;
    scoreComputer.innerText = `Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert("Player won!")
    } else if (computerScore === 5) {
        alert("Computer won!")
    }
}

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function () {
    const playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
})


const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function () {
    const playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
})

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function () {
    const playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playGame();
})
