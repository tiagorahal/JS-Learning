let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (playerNumber, computerNumber, randomNumber) => {
  if(playerNumber === randomNumber && computerNumber !== randomNumber){
    return true
  } else if(playerNumber === randomNumber && computerNumber === randomNumber) {
    return true
  } else if(computerNumber === randomNumber && playerNumber !== randomNumber) {
    return false
  } else {
    console.log('Something is wrong!')
    return false
  }
}

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++
  } else if(winner === 'computer') {
    computerScore++
  } else {
    console.log('Something is wrong!')
  }
}