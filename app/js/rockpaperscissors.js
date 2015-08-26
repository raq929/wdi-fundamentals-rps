////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var response = prompt()
    if (response === 'rock' || response === 'paper' || response === 'scissors'){
        return response;
    }   else {
        return getInput();
    }
}
    
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

        switch (playerMove){
        case computerMove:
            winner = 'tie';
            break;
        case 'rock':
            if (computerMove === 'scissors') {
            winner = 'player';
            } else winner = 'computer';
            break;
        case 'paper':
            if (computerMove === 'rock'){
                winner = 'player';
            } else winner = 'computer';
            break;
        case 'scissors': 
            if (computerMove === 'paper') {
                winner = 'player';
            } else winner = 'computer';
            break;
        }
        return winner;
    }

function playToFive(playerWins,computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    //var playerWins = 0;
    //var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (playerWins === 5 || computerWins === 5){
        return [playerWins, computerWins];
    } 
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    switch (getWinner(playerMove,computerMove)){
        case 'player':
        playerWins += 1;
        break;
        case 'computer':
        computerWins += 1;
        break;
        default:
    }
    console.log('You chose ' + playerMove + ' and the computer chose ' + computerMove + '.\n');
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '.\n');
    
    if (playerWins < 5 && computerWins < 5){
       console.log('The first player to win five games wins!\n');
       return playToFive(playerWins,computerWins); 
    }
}

playToFive(0, 0);
