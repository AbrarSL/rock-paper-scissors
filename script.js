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

function playRound(playerSelection, computerSelection) {
    let winString = `You win! Your ${playerSelection} beat ${computerSelection}`;
    let loseString = `You lose! Your ${playerSelection} was beaten by ${computerSelection}`;
    let tieString = `You tied! You both played ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return tieString;
    } else {
        switch (playerSelection) {
            case ("rock"):
                return (computerSelection === "paper") ? loseString : winString;

            case ("paper"):
                return (computerSelection === "scissors") ? loseString : winString;

            case ("scissors"):
                return (computerSelection === "rock") ? loseString : winString;
        }
    }
}