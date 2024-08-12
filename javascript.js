const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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

const checkWinner = (humanScore, computerScore) => {
    if (humanScore > computerScore) {
        console.log(`You won the game! You won ${humanScore} rounds against ${computerScore} won by the computer.`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game :( The computer won ${computerScore} rounds against ${humanScore} won by you.`);
    } else {
        console.log(`It's a draw! You and computer both won ${humanScore} rounds`);
    }
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (
            (humanChoice === ROCK && computerChoice === SCISSORS) ||
            (humanChoice === SCISSORS && computerChoice === PAPER) ||
            (humanChoice === PAPER && computerChoice === ROCK)        
        ){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(humanScore, computerScore);
        } else if (
            (computerChoice === ROCK && humanChoice === SCISSORS) ||
            (computerChoice === SCISSORS && humanChoice === PAPER) ||
            (computerChoice === PAPER && humanChoice === ROCK) 
        ) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            console.log(humanScore, computerScore);
        } else {
            console.log(`It's a draw! You both selected ${humanChoice}`);
            console.log(humanScore, computerScore);
        }
    }

    let counter = 0;
    while (counter < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        counter++;
    }

    checkWinner(humanScore, computerScore);
}

playGame();