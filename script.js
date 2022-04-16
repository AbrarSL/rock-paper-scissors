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