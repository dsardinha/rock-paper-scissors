const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return ROCK;
    } else if (computerChoice === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt(`Choose an option: "${ROCK}", "${PAPER}" or "${SCISSORS}"`)
    .trim()
    .toLowerCase();
    if (humanChoice === ROCK 
        || humanChoice === PAPER 
        || humanChoice === SCISSORS
        ) {
        return humanChoice;
    }
    else {
        alert(`Invalid option. Please select "${ROCK}", "${PAPER}" or "${SCISSORS}"`);
    }
}
