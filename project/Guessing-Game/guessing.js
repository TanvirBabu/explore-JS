// Guessing Game
// Guess a number from 1 to 5
// Guess a random number between 1 to 5
// If the guess number matches random number - then show message won else lose
// Run the game for 5 times
// Show the number of won and loss


var numOfWon= 0;
var numOfLost= 0;

for (var i = 1; i <= 6; i++){
    var guessNumber = parseInt(prompt('Enter a number from 1 to 6 : '));
    var randomNumber = Math.floor(Math.random() * 6) + 1;       

    if (guessNumber == randomNumber){
        console.log('You have won')
        numOfWon++
        
    } else{
        console.log('You have lost. Random number was ' + randomNumber);
        numOfLost++
    }
}

document.write('Total number of won = ' + numOfWon + '<br/>')

document.write('Total number of lost = ' + numOfLost)