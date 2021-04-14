const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Input not valid!');
  }
}

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return 'Try again, both of you are losers!';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return "You lose!";
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return "You win!";
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return "You lose!";
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return "You win!";
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return "You lose!";
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return "You win!";
  } else if (userChoice === 'bomb') {
    return "You win!";
  } else {
    return "SOMETHING IS WRONG";
  }
}

function playGame() {
  userChoice = getUserChoice('bomb');
  console.log(`User Input: ${userChoice}`);
  computerChoice = getComputerChoice();
  console.log(`Computer Input: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();



