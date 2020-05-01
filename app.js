let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.choices')





// Wybrór użytkownika
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

//losowanie  komputera
function generatedComputerChoice() {
  if (randomNumber === 1) {
    return computerChosen = 'kamień'
  } else if (randomNumber === 2) {
    return computerChosen = 'papier'
  } else if (randomNumber === 3) {
    return computerChosen = 'nożyczki'
  }
}

function results() {
  if (computerChosen == userChosen) {
    return result = 'Remis !!!'
} else if (computerChosen === 'kamień' && userChosen === 'papier') {
    return result = 'Wygrałes!'
} else if (computerChosen === 'kamień' && userChosen === 'nożyczki') {
    return result = 'Przegrałeś !'
} else if (computerChosen === 'papier' && userChosen === 'kamień') {
    return result = 'Przegrałeś !'
} else if (computerChosen === 'papier' && userChosen === 'nożyczki') {
    return result = 'Wygrałeś !'
} else if (computerChosen === 'nożyczki' && userChosen === 'kamień') {
    return result = 'Wygrałes !'
} else if (computerChosen === 'nożyczki' && userChosen === 'papier') {
    return result = 'Przegrałeś !!!'
  }
}
