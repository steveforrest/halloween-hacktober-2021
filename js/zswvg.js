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
            return "Ghost";
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
        console.log(userChoice)
        if (userChoice === comChoice) {
            result = 'Draw!';
            showResult();
        } else {
            if (userChoice === 'bat' && (comChoice == "Zombie" || comChoice == "Skeleton")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'bullet' && (comChoice == "Werewolf" || comChoice == "Zombie")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'stake' && (comChoice == "Vampire" || comChoice == "Werewolf")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'water' && (comChoice == "Ghost" || comChoice == "Vampire")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'proton' && (comChoice == "Skeleton" || comChoice == "Ghost")) {
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
     * Create a modal that is called up when the 
     * decide winner function is called and states what you chose what computer chose and the game result
     */
    function showResult() {
        //get modal element
        const modal = document.getElementById("resultsModal");
        // get starting state of modal
        modal.style.display = "flex";
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
    /** Show nextPageModal*/
    function showNextPageModal() {
        //get modal element
        const modalNextPage = document.getElementById("nextPageModal");
        // get starting state of modal
        modalNextPage.style.display = "flex";
    }
    /* check scores*/
    function checkScores() {
        const lost = document.getElementById('loss');
        const scored = document.getElementById('score');
        if (lost.innerText >= 3) {
            showGameOverModal();
        }else if(scored.innerText >=3){
            showNextPageModal();
        }
    }/**
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
            return "Ghost";
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
        console.log(userChoice)
        if (userChoice === comChoice) {
            result = 'Draw!';
            showResult();
        } else {
            if (userChoice === 'bat' && (comChoice == "Zombie" || comChoice == "Skeleton")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'bullet' && (comChoice == "Werewolf" || comChoice == "Zombie")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'stake' && (comChoice == "Vampire" || comChoice == "Werewolf")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'water' && (comChoice == "Ghost" || comChoice == "Vampire")) {
                incrementScore();
                showResult();
                result = 'Win!';
            } else if (userChoice === 'proton' && (comChoice == "Skeleton" || comChoice == "Ghost")) {
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
     * Create a modal that is called up when the 
     * decide winner function is called and states what you chose what computer chose and the game result
     */
    function showResult() {
        //get modal element
        const modal = document.getElementById("resultsModal");
        // get starting state of modal
        modal.style.display = "flex";
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
    /** Show nextPageModal*/
    function showNextPageModal() {
        //get modal element
        const modalNextPage = document.getElementById("nextPageModal");
        // get starting state of modal
        modalNextPage.style.display = "flex";
    }
    /* check scores*/
    function checkScores() {
        const lost = document.getElementById('loss');
        const scored = document.getElementById('score');
        if (lost.innerText >= 3) {
            showGameOverModal();
        }else if(scored.innerText >=3){
            showNextPageModal();
        }
    }