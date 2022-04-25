function genRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function computerPlay() {
  let randomChoiceNumber = genRandomNumber(1, 3);

  switch (randomChoiceNumber) {
    case (1):
      return "rock";

    case (2):
      return "paper";

    case (3):
      return "scissors";
  }
}

function playerPlay() {
  let playerSelection;

  while (true) {
    playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" ||
      playerSelection === "scissors") {
      break;
    }
  }

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundResult = [false, false];

  if (playerSelection === computerSelection) {
    roundResult[0] = true;
  } else {
    switch (playerSelection) {
      case ("rock"):
        roundResult[1] = (computerSelection === "scissors") ? true : false;
        break;

      case ("paper"):
        roundResult[1] = (computerSelection === "rock") ? true : false;
        break;

      case ("scissors"):
        roundResult[1] = (computerSelection === "paper") ? true : false;
        break;
    }
  }

  return roundResult;
}

function startGame() {
  const roundsInput = document.querySelector('#roundsInput');
  const startPage = document.querySelector('#startPage');

  gameData.gameRounds = +roundsInput.value;

  if (gameData.gameRounds <= 0) {
    roundsInput.classList.add('loser');
  } else {
    roundsInput.classList.remove('loser');
    startPage.classList.add('inactive');
  }
}

let gameData = {
  gameRounds: 0,
  currentRound: 0,
  wins: 0,
  losses: 0,
  ties: 0,
};

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame);