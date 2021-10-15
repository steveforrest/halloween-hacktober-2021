/**
 * Generates a number between 1 and 5 and asigns it to a computer choice for the game
 */
 function generateComputerChoice() {

    let comChoice = Math.ceil(Math.random() * 5);

    if (comChoice === 1) {
        return "Zombie";
    } else if (comChoice === 2) {
        return "Skeleton";
    } else if (comChoice === 3) {
        return "Vampire";
    } else if (comChoice === 4) {
        return "Werewolf";
    } else if (comChoice === 5) {
        return "Ghost ";
    } else {
        return "error";
    }
}
/**
 * Comapres the user choice from the buttons to the randomly generated computers choice
 */
function decideWinner(userChoice) {
    let comChoice = generateComputerChoice();
    let result;
    if (userChoice === comChoice) {
        result = 'Draw!';
        showResult();
    } else {
        if (userChoice === "Rock" && (comChoice == "Scissors" || comChoice == "Lizard")) {
            incrementScore();
            showResult();
            result = 'Win!';
        } else if (userChoice === "Paper" && (comChoice == "Rock" || comChoice == "Spock")) {
            incrementScore();
            showResult();
            result = 'Win!';
        } else if (userChoice === "Scissors" && (comChoice == "Paper" || comChoice == "Lizard")) {
            incrementScore();
            showResult();
            result = 'Win!';
        } else if (userChoice === "Lizard" && (comChoice == "Spock" || comChoice == "Paper")) {
            incrementScore();
            showResult();
            result = 'Win!';
        } else if (userChoice === "Spock" && (comChoice == "Scissors" || comChoice == "Rock")) {
            incrementScore();
            showResult();
            result = 'Win!';
        } else {
            incrementLoss();
            showResult();
            result = 'Loss!';
        }
    }
    userChose(userChoice);
    gameResult(result);
    computerChose(comChoice);
    return result;
}
/**
 * gets current score from the DOM and increases it by one
 */
function incrementScore() {
    let previousScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++previousScore;
}
/**
 * gets current loss from the DOM and increases it by one
 */
function incrementLoss() {
    let previousLoss = parseInt(document.getElementById("loss").innerText);
    document.getElementById("loss").innerText = ++previousLoss;
}
/**
 * to allow to show rules
 */
function showRules() {
    //get modal element
    const modal = document.getElementById("rules-modal");
    //get open modal button
    //get close modal button
    // get starting state of modal
    modal.style.display = "flex";
}
/**
 * to allow to hide rules
 */
function hideRules() {
    //get modal element
    const modal = document.getElementById("rules-modal");
    //get open modal button
    //get close modal button
    // get starting state of modal
    modal.style.display = "none";
}
/**
 * Create a modal that is called up when the 
 * decide winner function is called and states what you chose what computer chose and the game result
 */
function showResult() {
    //get modal element
    const modal = document.getElementById("resultsModal");
    // get starting state of modal
    modal.style.display = "block";
    userChose();
}
function hideResult() {
    //get modal element
    const modal = document.getElementById("resultsModal");
    // get starting state of modal
    modal.style.display = "none";
    checkScores();

}
function userChose(whatUserChose) {
    const usersChoice = document.getElementById("user-chose");
    usersChoice.innerHTML = whatUserChose;
}

function gameResult(gameResult) {
    const gameEnded = document.getElementById("game-result");
    gameEnded.innerHTML = gameResult;
}
function computerChose(computerChose) {
    const computersChoice = document.getElementById("computer-chose");
    computersChoice.innerHTML = computerChose;
}
/**
 * will reset the score when called
 */
function resetScore() {
document.getElementById('score').innerText = 0;
}
/**
 * will reset the score when called
 */
function resetLoss() {
    document.getElementById("loss").innerText = 0;
}
/**
 * reset game resets player and computers score and closes the gameOver modal
 */
function resetGame() {
    resetScore();
    resetLoss();
    hideGameOverModal();
}
/** Hide gameOverModal*/
function hideGameOverModal() {
    //get modal element
    const modalGameOver = document.getElementById("gameOverModal");
    modalGameOver.style.display = "none";
}
/** Show gameOverModal*/
function showGameOverModal() {
    //get modal element
    const modalGameOver = document.getElementById("gameOverModal");
    // get starting state of modal
    modalGameOver.style.display = "flex";
}
/* check scores*/
function checkScores() {
    const lost = document.getElementById('loss');
    const scored = document.getElementById('score');
    if (lost.innerText >= 5 || scored.innerText >= 5) {
        showGameOverModal();
    }
}