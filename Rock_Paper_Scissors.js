
let getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        result = "Rock"
    }
    else if (choice == 1) {
        result = "Scissors"
    }
    else {
        result = "Paper"
    }
    return result
};

let round = (player, computer) => {
    if (player.toLowerCase() == "rock" && computer.toLowerCase() == "paper") {
        return "Computer"
    }
    if (player.toLowerCase() == "rock" && computer.toLowerCase() == "scissors") {
        return "Player"
    }
    if (player.toLowerCase() == "paper" && computer.toLowerCase() == "scissors") {
        return "Computer"
    }
    if (player.toLowerCase() == "paper" && computer.toLowerCase() == "rock") {
        return "Player"
    }
    if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "paper") {
        return "Player"
    }
    if (player.toLowerCase() == "scissors" && computer.toLowerCase() == "rock") {
        return "Computer"
    }
    if (player.toLowerCase() == computer.toLowerCase()) {
        return "Draw"
    }
};

let game = () => {
    playerCount = 0
    computerCount = 0
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1))
        let playerSelection = prompt("Enter Rock, Paper, or Scissors")
        computer = getComputerChoice()
        result = round(playerSelection, computer)
        if (result == "Computer") {
            computerCount++
        } else if (result == "Player") {

            playerCount++
        }
        console.log("Computer score: " + computerCount)
        console.log("Player score: " + playerCount)
    }
    if (computerCount > playerCount) {
        console.log("The winner is the Computer")
    } else if (computerCount < playerCount) {
        console.log("The winner is the Player")
    } else {
        console.log("It's a draw")
    }
}

game()

