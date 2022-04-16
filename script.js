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
    let roundResult = [false, false, computerSelection];

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