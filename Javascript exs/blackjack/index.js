let sum = document.getElementById("sum-el")
let message = document.getElementById("message-el")
let yourHand = []
let yourHandEl = document.getElementById("yourHand-el")
let alive = true
let somma = 0 

let player = {name : "Muninn",
    chips : "0"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :" + player.chips 

function startGame() {
    newCard()
    newCard()
    game()
}

function game(){

    sum.textContent = somma
    yourHandEl.textContent = yourHand.join(" ") 
    if (somma < 21) {

    message.textContent = "Do you want another card?"

    } else if (somma == 21) {

        message.textContent = "You Win"

    } else {

        alive = false    
        message.textContent = "Game Over"
    } 
}



function newCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    yourHand.push(randomNumber)
    
    somma = 0

    for (let i=0; i <= yourHand.length -1 ; i ++){
        somma += yourHand[i]

    } 
    game()
}