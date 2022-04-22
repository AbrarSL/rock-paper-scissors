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

function game(rounds) {
  let wins = 0;
  let losses = 0;
  let ties = 0;

  for (let i = 0; i < rounds; i++) {
    let resultString;

    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);

    if (result[0]) {
      ties++;
      resultString = `You Tied! You both played ${playerSelection}`;
    } else if (result[1]) {
      wins++;
      resultString = `You Win! Your ${playerSelection} beat ${computerSelection}`;
    } else {
      losses++;
      resultString = `You Lose! Your ${playerSelection} lost to ${computerSelection}`;
    }

    console.log(resultString);
  }

  if (wins > losses) {
    console.log("You won!");
  } else if (wins === losses) {
    console.log("You tied!");
  } else {
    console.log("You lost!")
  }

  console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
}