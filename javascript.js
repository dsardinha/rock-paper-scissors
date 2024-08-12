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
        return getHumanChoice();
    }
}

const playRound = (humanChoice, computerChoice) => {
    if (
        (humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === ROCK)        
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        (computerChoice === ROCK && humanChoice === SCISSORS) ||
        (computerChoice === SCISSORS && humanChoice === PAPER) ||
        (computerChoice === PAPER && humanChoice === ROCK) 
    ) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log(`It's a draw! You both selected ${humanChoice}`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore, computerScore);