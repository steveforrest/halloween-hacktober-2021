
let candy = []
let sum = 0 
let hasFullBag = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let candiesEl = document.querySelector("#candy-el")
let candiesEl2 = document.querySelector("#candy-el2")
let myCandy = 0



function startGame() {
    candiesEl2.innerText = " "
    isAlive = true
    let firstHand = getRandomNumber()
    let secondHand = getRandomNumber()
    candy = [firstHand, secondHand]
    sum = firstHand + secondHand
    renderGame()
}


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() *5) + 1
    
    return randomNumber
}
function displayHide() {
    document.getElementById("page-link").style.display="flex";
    document.getElementById("btn-holder").style.display="none"; 
    window.scrollTo(0,document.body.scrollHeight);  
 }

function renderGame () {       
     candiesEl.innerText = "Thats a greedy grab!"
     
    //  `in each hand,
    //  ~${candy[0]}~ and ~${candy[1]}~ candies `
    // for (let i = 0; i < candy.length; i++) {
    //     candiesEl.innerText += candy[i] + " "
    // }
    
    sumEl.innerText = ` Bag Total: ${sum} Treats     
    click "Grab More" if you dare`

    if (sum < 5){
        message = "Still lots of room in your bag!."
    }       
    else if( sum >= 6 && sum <= 11) {        
        message ="You can still grab more sweets!"
        
    }else if (sum === 12) {
        message = "Your Soul is Saved, But your teeth will rot. Leave this place with what you've got"        
        hasFullBag = true
        displayHide()       
        }else {        
        message = "You're too greedy to be fair. Play again, if you dare."
        isAlive = false
    }

    messageEl.textContent = message
}


function newHandful() {
    if (isAlive === true && hasFullBag === false) {    
    let myCandy = getRandomNumber()
    sum += myCandy
    candy.push(myCandy)
    candiesEl2.innerText = `you grabbed ${myCandy} more!`
    
    renderGame()
}
}
