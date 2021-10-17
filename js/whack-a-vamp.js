const square = document.querySelectorAll('.whack-a-vamp-square')
const vamp = document.querySelectorAll('.vamp')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

// Audio files. ogg included for Firefox support
var draculaHitSound = new Audio("audio_files/WAVG_Drac_Hit_2.mp3"); // buffers automatically when created
var loseGameSound = new Audio("audio_files/WAVG_Lose_Sound.mp3");
var winGameSound = new Audio("audio_files/WAVG_Win_Sound.mp3");
var draculaHitSound = new Audio("audio_files/WAVG_Drac_Hit_2.ogg"); 
var loseGameSound = new Audio("audio_files/WAVG_Lose_Sound.ogg");
var winGameSound = new Audio("audio_files/WAVG_Win_Sound.ogg");


let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    // Remove All Styling from Game Board before Starting.
    square.forEach(className => {
        className.classList.remove('vamp')
    })
    // Define Random Position within Grid - mathRandom - And Multiply It by Amount of Squares in Grid.
    // Math.floor Rounds Down to Nearest Interger - so always below or equivalent to 9.
    let randomPosition = square[Math.floor(Math.random() * 9)]
    // Once randomPosition Defined add Class of Vamp.
    randomPosition.classList.add('vamp')

    // Assign id of randomPostion to hitPosition.
    hitPosition = randomPosition.id
} 

square.forEach(id => {
    // mouseup - When We Hit Mouse on an Element.
    id.addEventListener('mouseup', () => {
        // If the Mouse Click Equals the div id of Our hitPosition We Win.
        if(id.id === hitPosition){
            draculaHitSound.play(); // Play dracula sound effect
            // Show Hit Image when Mouse Click Successful.
            id.classList.add('hit')
            setTimeout(function(){
                id.classList.remove('hit');
            }, 500);
            result = result + 1
            // Visually Display Score In Browser.
            score.textContent = result
        }
    })
})

function moveVamp() {
    // Set Timer id To null.
    let timerId = null
    // Set Timer Interval to 1000 Miliseconds.
    timerId = setInterval(randomSquare, 1000)
}

moveVamp()

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
// Resets the page to retry
function reset() {
    window.location.reload();
}
/** Show nextPageModal*/
function showNextPageModal() {
    //get modal element
    const modalNextPage = document.getElementById("nextPageModal");
    // get starting state of modal
    modalNextPage.style.display = "flex";
}

let timerId = setInterval(countDown, 1000)
function countDown() {
    // When Timer Gets to 0, Notify User Game Over
    if(currentTime === 0) {
        // Set timer to 0
        clearInterval(timerId)
        //Set score back to 0
        score=null
        if (result <= 44) {
            loseGameSound.play(); // Play lose sound effect
            showGameOverModal()
        }else if(result >=45){
            winGameSound.play(); // Play win sound effect 
            showNextPageModal();
        }
        return;
    }else{
         // Set Timer to Decrement By 1. 
        currentTime--
        timeLeft.textContent = currentTime
    } timeLeft -= 1;
}
