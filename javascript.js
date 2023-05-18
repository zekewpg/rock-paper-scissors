// TOP Rock Paper Scissors Assignment
// zekewpg 16 May 2023


//list of functions:

// 1. playRPS()

// 2. getComputerChoice()

// 3. getRandomInteger()

// 4. isValidChoice()

// 5. getPlayerChoice()

// 6. game()

function playRPS(playerChoice, computerChoice) {
// Function to play a single round of RPS // requires two inputs, playerChoice and computerChoice
// rtns array of values: mbr reprensting win/lose/tie, info string, player choice, and cpu choice

    // filter for invalid values and return an error message if that is the case
    if (playerChoice && computerChoice) {
        // only arrive here if we get two inputs that are not null/undefined
        // ie rock or paper or scissors. use array include! should this be a seperate function?
        const choiceArray = ['rock','paper','scissors'];
        if (choiceArray.includes(playerChoice) && choiceArray.includes(computerChoice)) {
            // two valid entries have been provided. Now we need to select winner and return info/winner
            // blatently stolen from stackoverflow - love the logic
            const weapons = {
                rock: {weakTo: 'paper', strongTo: 'scissors'},
                paper: {weakTo: 'scissors', strongTo: 'rock'},
                scissors: {weakTo: 'rock', strongTo: 'paper'}
            }

            if (weapons[playerChoice].strongTo === computerChoice) {
                // Player won because `${lowerPlayer} beats ${lowerCopmuter}
                //return `(1) You won! ${playerChoice} beats ${computerChoice}.`;
                return ['1', 'Player Won!', playerChoice, computerChoice];
                
            }

            if (weapons[playerChoice].weakTo === computerChoice) {
                // player lost
                //return `(2) Computer won! ${computerChoice} beats ${playerChoice}.`;
                return ['2', 'Computer Won!', playerChoice, computerChoice];
            }
            
            // tie
            //return `(3) It was a tie! You both threw ${playerChoice}.`;
            return ['3', 'It was a tie!', playerChoice, computerChoice];
            
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
    // Assign computerGuess a random number between one and three and
    //return Rock, Paper, or Scissors accordingly
    let computerGuess = getRandomInteger(3);
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
    // given the top value provided by upperBound, return a random number
    //between 1 and upperBound
    return ~~(Math.random()*upperBound+1);
}

function isValidChoice(choice) {
// given the provided parameter, check if it is a valid one for rock paper scissors
// and return true or false accordingly
    if (choice) {
        // filter for null/undefined?
        let rpsArray = ['rock','paper','scissors'];
        if (rpsArray.indexOf(choice.toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
        
    }
}

function getPlayerChoice() {
    let choice = prompt('Enter choice for round:');
    // returns undefined if escape/cancel - can use as a way to exit game loop
    // add check here for '' vice null? if '' - return random chioce
    if (choice === '') {
        console.log('No choice made, selecting randomly');
        return getComputerChoice().toLowerCase();
    } else if (choice === null) {
        return 'undefined';
    } else
    return choice.toLowerCase();
    }

//game loop that prompts for rounds of RPS until someone wins 3 games
function game() {

    // set up and play 5 rounds of RPS  or until someone wins three and
    // report the results at end or if player terminates
    let playerWins = 0;
    let computerWins = 0;
    //let isWinner = false;
    let validEntry = false;
    let playerChoice;
    let rounds = 1;
    let  gameStats = [];

    //post intro/instructions
    console.log('Welcome to Rock Paper Scissors');

    //ask if user wants to play. true value = play false = no
    if (confirm('Do you want to play a round of Rock Paper Scissors with me? First one to get three wins is the victor.')) {
        // user wants to play
        while (playerWins < 3 && computerWins < 3) {
        // have less than 3 wins than we need to play a round of RPS
        // need a valid entry before we can do a round - get player choice
        while (validEntry === false) {
            playerChoice = getPlayerChoice();
            // check here for null so we can exit out?
            console.log(playerChoice);
            if (playerChoice === 'undefined') {
                // exit routine, player hit escape/cancel
                console.log('Player is exiting the game. See you later.');
                return;

            } else {

            if (isValidChoice(playerChoice) && playerChoice != undefined) {
                validEntry = true;
            } else {
                // do something else
            }
        }

        } // end of while loop for validEntry === false

        // should arrive here with a valid entry from user
        // need to play a round of RPS, record the results, display the results, increment the rounds
        // counter and flip validEntry back to false
        let rpsGame = playRPS(playerChoice,getComputerChoice());
        // use something like 'It was a tie!' , 'You won!', 'You lost!' to increment score?
        // ideally change RPS routine to return a number indicating result 1 for win 2 for lose 3 for tie
        switch (rpsGame[0]) {

            // Player wins    
            case '1':
                // update player win counter
                playerWins++;
                console.log(`You win! You threw ${rpsGame[2]} and computer threw ${rpsGame[3]}`);
                gameStats.push(`Round ${rounds} result: Player wins. Player threw ${playerChoice} and Computer threw ${rpsGame[3]}`);

                break;
            //Computer Wins
            case '2':
                //update computer wins counter
                computerWins++;
                console.log(`Computer won! You threw ${rpsGame[2]} and computer threw ${rpsGame[3]}`);
                gameStats.push(`Round ${rounds} result: Computer wins. Player threw ${playerChoice} and Computer threw ${rpsGame[3]}`);

                break;
            //Tie
            case '3':
                //console.log(rpsGame);
                console.log(`It was a tie. You both threw ${rpsGame[2]}.`);
                gameStats.push(`Round ${rounds} result: Tie. You both threw ${playerChoice}`);

                break;
            
        }

        validEntry = false;
        rounds++; // use this for game result data i.e how many rounds the match went
            
        }
    } else {
        // user does not want to play
        console.log('Player is exiting game. See you later');
        return;
    }
        // is this where we end up after three wins from someone?
        // yup. check for who won
        // to do append ruslts from each round to an array and at the end display the array to show 
        // cumulative results
        if (playerWins === 3) {
            //player won!
            console.log('Congratulations, you won!');
        } else {
            //computer won
            console.log('Sorry, you lost!');
    }

        // can we prompt for stats here?
        if(confirm('Do you want game stats?')) {
            // give game stats
             console.log('Game Stats: Game lasted ' + parseInt(rounds-1) + ' rounds:');
             for (const item in gameStats) {
                console.log(gameStats[item]);
            } 
          
        } else {
            // no game stats
            console.log('Okay, goodbye.');
        }
}
