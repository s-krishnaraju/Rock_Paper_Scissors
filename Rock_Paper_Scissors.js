
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

playerCount = 0
computerCount = 0
const playerScore = document.querySelector('.player')
const computerScore = document.querySelector('.computer')
const div1 = document.querySelector('.winner')
const div2 = document.querySelector('.selection')
const replay = document.querySelector('.replay')
const buttons = document.querySelectorAll('button')
const versus = document.querySelectorAll('.versus')
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        computer = getComputerChoice()
        result = round(button.id, computer)
        if (result == "Computer") {
            computerCount++
        } else if (result == "Player") {
            playerCount++
        }
        playerScore.textContent = 'Player: ' + playerCount
        computerScore.textContent = 'CPU: ' + computerCount
        if (playerCount == 5) {
            div1.textContent = 'Winner is Player'
            div2.style.display = "none"
            div1.style.display = "block"
            replay.style.display = "block"

        } else if (computerCount == 5) {
            div1.textContent = 'Winner is Computer'
            div2.style.display = "none"
            div1.style.display = "block"
            replay.style.display = "block"
        }
    })
})

replay.addEventListener('click', () => {
    playerCount = 0
    computerCount = 0
    playerScore.textContent = 'Player: ' + playerCount
    computerScore.textContent = 'CPU: ' + computerCount
    div2.style.display = "flex"
    div1.style.display = "none"
    replay.style.display = "none"
})

