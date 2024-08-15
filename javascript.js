const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let roundCounter = 0;

const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const overallResult = document.querySelector('.overall-result');
const finalResult = document.querySelector('.final-result');

const getComputerSelection = () => {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return ROCK;
    } else if (computerSelection === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (
        (playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === SCISSORS && computerSelection === PAPER) ||
        (playerSelection === PAPER && computerSelection === ROCK)        
    ){
        playerScore++;
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (computerSelection === ROCK && playerSelection === SCISSORS) ||
        (computerSelection === SCISSORS && playerSelection === PAPER) ||
        (computerSelection === PAPER && playerSelection === ROCK) 
    ) {
        computerScore++;
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        roundResult.textContent = `It's a draw! You both selected ${playerSelection}`;
    }
    overallResult.textContent = `Player: ${playerScore}\nComputer: ${computerScore}`;
    console.log(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5) {
        checkWinner(playerScore, computerScore);
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }
}

const startNewGame = () => {
    finalResult
}

const checkWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        finalResult.textContent = "You won the game! 🏆";
    } else {
        finalResult.textContent = "You lost the game 💀";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        playRound(playerSelection, getComputerSelection());
    })
})
