
let candy = []
let sum = 0 
let hasFullBag = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let candiesEl = document.querySelector("#candy-el")


function startGame() {
    isAlive = true
    let firstHand = getRandomNumber()
    let secondHand = getRandomNumber()
    candy = [firstHand, secondHand]
    sum = firstHand + secondHand
    renderGame()
}


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() *9) + 1
    
    return randomNumber
}


function renderGame () {
    candiesEl.textContent = "You grabbed: "
    for (let i = 0; i < candy.length; i++) {
        candiesEl.textContent += candy[i] + " "
    }
    sumEl.textContent = "You have " + sum + " candies"
    if (sum <= 18) {
        
        message ="Tricks And Treats. You can grab more sweets?"
        
    }else if (sum === 19) {
        message = "Your Soul is Saved, But your teeth will rot. Leave this place with what you've got"
        hasFullBag = true
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
    console.log(candy)
    renderGame()
}
}
