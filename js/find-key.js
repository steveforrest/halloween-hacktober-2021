const square = document.querySelectorAll('.find-key-square')
const key = document.querySelectorAll('.key')

function randomSquare() {
    // Remove All Styling from Game Board before Starting.
    square.forEach(className => {
        className.classList.remove('key')
    })
    // Define Random Position within Grid - mathRandom - And Multiply It by Amount of Squares in Grid.
    // Math.floor Rounds Down to Nearest Interger - so always below or equivalent to 9.
    let randomPosition = square[Math.floor(Math.random() * 81)]
    // Once randomPosition Defined add Class of key.
    randomPosition.classList.add('key')

    // Assign id of randomPostion to hitPosition.
    hitPosition = randomPosition.id
} 

square.forEach(id => {
    // mouseup - When We Hit Mouse on an Element.
    id.addEventListener('mouseup', () => {
        // If the Mouse Click Equals the div id of Our hitPosition We Win.
        if(id.id === hitPosition){
            showNextPageModal()
            
        }
    })
})

randomSquare()

/** Show nextPageModal*/
function showNextPageModal() {
    // Add sound file 
    var findKeySound = new Audio("audio_files/find_key_door_open.mp3");
    var findKeySound = new Audio("audio_files/find_key_door_open.ogg");
    //get modal element
    const modalNextPage = document.getElementById("nextPageModal");
    // get starting state of modal
    modalNextPage.style.display = "flex";

    // Sound 
    findKeySound.play()
}


