// TOP ROck Paper Scissors Assignment
// zekewpg 16 May 2023

// Function to play a single round of RPS
// requires two inputs, playerChoice and computerChoice
// returns each players choices and the winner
function playRPS(playerChoice, computerChoice) {

    // filter for invalid values and return an error message if that is the case
    if (playerChoice && computerChoice) {

        // add lower case variables to cut down on code
        let lowerPlayer = String(playerChoice).toLowerCase();
        let lowerComputer = String(computerChoice).toLowerCase();
        
        // we should not get to this point if there are not two defined/not null inputs
        // need to check for valid choices
        // what is most efficient way to check that booth variables are valid
        // ie rock or paper or scissors. use array include! should this be a seperate function?
        const choiceArray = ['rock','paper','scissors'];
        if (choiceArray.includes(lowerPlayer) && choiceArray.includes(lowerComputer)) {
            // two valid entries have been provided. Now we need to select winner and return info/winner
            // check to see if player won
            const weapons = {
                rock: {weakTo: 'paper', strongTo: 'scissors'},
                paper: {weakTo: 'scissors', strongTo: 'rock'},
                scissors: {weakTo: 'rock', strongTo: 'paper'}
            }

            if (weapons[lowerPlayer].strongTo === lowerComputer) {
                // Player won because `${lowerPlayer} beats ${lowerCopmuter}
                return `Player won! ${lowerPlayer} beats ${lowerComputer}.`;
                
            }

            if (weapons[lowerPlayer].weakTo === lowerComputer) {
                // player lost
                return `Computer won! ${lowerComputer} beats ${lowerPlayer}.`;
            }
            
            // tie
            return `It was a tie with ${lowerPlayer} and ${lowerComputer}. Try again!`;
            
        }  else {
            // entries provided were not valid (rock/paper/scissors) should i check up front with nulls/undefined?
            // return error message
             console.log('Game cannot be played without valid throws from the player and the computer. rock/paper/scissors');
        }     
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