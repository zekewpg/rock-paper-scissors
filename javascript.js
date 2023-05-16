// TOP ROck Paper Scissors Assignment
// zekewpg 16 May 2023

// Function to play a single round of RPS
// requires two inputs, playerChoice and computerChoice
// returns each players choices and the winner
function playRPS(playerChoice, computerChoice) {

    // filter for invalid values and return an error message if that is the case
    if (playerChoice && computerChoice) {
        // we should not get to this point if there are not two defined/not null inputs
        // so we are now playing RPS!
        
        console.log(playerChoice + ' ' + computerChoice);
    } else {
        // two defined/non null inputs were not provided
        console.log('Game cannot be played without throws from both the player and the computer');
    }
}


function getComputerChoice() {

    //randomly return the computers choice of rock, paper, or scissors
    //
    // create integer variable and randomly assign an integer value of between 1 and 3 to it
    let computerGuess = getRandomInteger(3);
    //based on random value returned between 1 and 3, return Rock, Paper, or Scissors
    switch (computerGuess) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getRandomInteger(upperBound) {
    // given the top value provided by maxInteger, return a random integer
    //between 1 and maxInteger

    return Math.floor(Math.random()*upperBound+1);
}