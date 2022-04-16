function genRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function computerPlay() {
    let randomChoiceNumber = genRandomNumber(1, 3);

    switch (randomChoiceNumber) {
        case (1):
            return "Rock";

        case (2):
            return "Paper";

        case (3):
            return "Scissors";
    }
}