function genRandomNumber(min, max) {

  return Math.round(Math.random() * (max - min) + min);
}

function computerPlay() {

  const randomChoiceNumber = genRandomNumber(1, 3);

  switch (randomChoiceNumber) {
    case (1):
      return "rock";

    case (2):
      return "paper";

    case (3):
      return "scissors";
  }
}

function checkWinner(playerSelection, computerSelection) {

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

function displaySelections(playerSelection, computerSelection, roundResult) {

  const playerDisplay = document.querySelector('#playerSelection');
  const computerDisplay = document.querySelector('#computerSelection');

  playerDisplay.innerHTML = (playerSelection === 'rock') ? '🪨' :
    (playerSelection === 'paper') ? '🧻' :
      '✂️';

  computerDisplay.innerHTML = (computerSelection === 'rock') ? '🪨' :
    (computerSelection === 'paper') ? '🧻' :
      '✂️';

  if (gameData.currentRound === 0) {
    playerDisplay.classList.remove('invisible');
    computerDisplay.classList.remove('invisible');
  }

  playerDisplay.classList.remove('winner');
  playerDisplay.classList.remove('loser');

  computerDisplay.classList.remove('winner');
  computerDisplay.classList.remove('loser');

  if (roundResult[0]) {
    playerDisplay.classList.add('winner');
    computerDisplay.classList.add('winner');
  } else if (roundResult[1]) {
    playerDisplay.classList.add('winner');
    computerDisplay.classList.add('loser');
  } else {
    playerDisplay.classList.add('loser');
    computerDisplay.classList.add('winner');
  }
}

function updateScores(roundResult) {
  const scoreBoards = document.querySelectorAll('.scoreboard .score');

  gameData.currentRound++;
  scoreBoards[0].textContent = `Rounds: ${gameData.currentRound}/${gameData.gameRounds}`;

  if (roundResult[0]) {
    gameData.ties++;
    scoreBoards[3].textContent = `Ties: ${gameData.ties}`;

  } else if (roundResult[1]) {
    gameData.wins++;
    scoreBoards[1].textContent = `Wins: ${gameData.wins}`;

  } else {
    gameData.losses++;
    scoreBoards[2].textContent = `Losses: ${gameData.losses}`;
  }
}

function playRound(event) {
  const controlButton = event.target;

  const playerSelection = (controlButton.id === 'rockButton') ? 'rock' :
    (controlButton.id === 'paperButton') ? 'paper' :
      'scissors';
  const computerSelection = computerPlay();

  const roundResult = checkWinner(playerSelection, computerSelection);

  displaySelections(playerSelection, computerSelection, roundResult);
  updateScores(roundResult);

  if (gameData.currentRound === gameData.gameRounds) {
    const controlButtons = document.querySelectorAll('#controlArea .btn');
    controlButtons.forEach((controlButton) => {
      controlButton.classList.add('inactive');
    });

    setInterval(endGame, 2000);
  }
}

function startGame() {
  const roundsInput = document.querySelector('#roundsInput');
  const startPage = document.querySelector('#startPage');

  const controlButtons = document.querySelectorAll('#controlArea .btn');
  const scoreBoards = document.querySelectorAll('.scoreboard .score');

  gameData.gameRounds = +roundsInput.value;

  if (gameData.gameRounds <= 0) {
    roundsInput.classList.add('loser');

  } else {
    roundsInput.classList.remove('loser');
    startPage.classList.add('inactive');

    controlButtons.forEach((controlButton) => controlButton.classList.remove('inactive'));
    scoreBoards.forEach((scoreBoard) => scoreBoard.classList.remove('inactive'));
    scoreBoards[0].textContent = `Round: 1/${gameData.gameRounds}`;
  }
}

function endGame() {
  const resultPage = document.querySelector('#resultPage');
  const dialogTitle = document.querySelector('.resultpage .dialog-title');
  const scoreBoards = document.querySelectorAll('.resultpage .score');

  scoreBoards[0].textContent = `Wins: ${gameData.wins}`;
  scoreBoards[1].textContent = `Losses: ${gameData.losses}`;
  scoreBoards[2].textContent = `Ties: ${gameData.ties}`;

  if (gameData.wins > gameData.losses) {
    dialogTitle.textContent = 'You Won!';
  } else if (gameData.wins === gameData.losses) {
    dialogTitle.textContent = 'You Tied!';
  } else {
    dialogTitle.textContent = 'You Lost!';
  }

  resultPage.classList.remove('inactive');
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

const retryButton = document.querySelector('#playAgainButton');
retryButton.addEventListener('click', () => location.reload())

const controlButtons = document.querySelectorAll('#controlArea .btn');
controlButtons.forEach((button) => button.addEventListener('click', playRound));