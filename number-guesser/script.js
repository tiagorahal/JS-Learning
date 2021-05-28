let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(playerNumber, computerNumber, randomNumber) {
  if(playerNumber === randomNumber && computerNumber !== randomNumber){
    return true
  } else if(computerNumber === randomNumber && playerNumber !== randomNumber) {
    return false
  } else if(playerNumber === randomNumber && computerNumber === randomNumber) {
    return true
  } else {
    console.log('Something is wrong!')
    return false
  }
}