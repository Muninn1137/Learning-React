let hands = ["rock", "paper", "scissor"]

function play() {

    let result = Math.floor(Math.random()*3 )

    switch (result) {
        case 0: return hands[0]
        case 1: return hands[1]
        case 2: return hands[2]
    }

    // could have done it like: return hands[result]
}

console.log(play())