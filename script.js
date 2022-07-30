function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return score = 0
  }
  if (playerChoice == 'Rock') {
    if (computerChoice == 'Scissors') {
      return score = 1
    } else return score = -1
  }

  if (playerChoice == 'Paper') {
    if (computerChoice == 'Rock') {
      return score = 1
    } else return score = -1
  }

  if (playerChoice == 'Scissors') {
    if (computerChoice == 'Paper') {
      return score = 1
    } else return score = -1
  }

}

function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById('result')
  const scoreDiv = document.getElementById('player-score')
  const hands = document.getElementById('hands')
  if (score == -1) {
    result.innerText = 'You Lose!'
  }
  if (score == 0) {
    result.innerText = 'You Draw!'
  }
  if (score == 1) {
    result.innerText = 'You Win!'
  }

  scoreDiv.innerText = Number(scoreDiv.innerText) + score
  hands.innerText = `${playerChoice} vs ${computerChoice}`

}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)

}


function playGame() {
  const playBtns = document.querySelectorAll('.rpsButton')

  playBtns.forEach(playBtn => {
    playBtn.onclick = () => onClickRPS(playBtn.value)
  })

  const clearBtn = document.getElementById('endGameButton')
  clearBtn.onclick = () => endGame()

}

function endGame() {
  const result = document.getElementById('result')
  const scoreDiv = document.getElementById('player-score')
  const hands = document.getElementById('hands')

  result.innerText = ''
  scoreDiv.innerText = ''
  hands.innerText = ''
}

playGame()