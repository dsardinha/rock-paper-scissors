const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt('Choose an option: "rock", "paper" or "scissors"')
    .trim()
    .toLowerCase();
    if (humanChoice === 'rock' 
        || humanChoice === 'paper' 
        || humanChoice === 'scissors'
        ) {
        return humanChoice;
    }
    else {
        alert('Invalid option. Please select "rock", "paper" or "scissors"');
    }
}
