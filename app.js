document.addEventListener('DOMContentLoaded', () => {
//The code below is a div element which helps me with the grid and display of the game//
  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
  //the numbers here set up the grid for the game. Each number comtibutes to the layout of the grid that each asset will go in (I got this number grid from a Youtube video by Ania Kubow)
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]


  const squares = []

//This function allows for the layout of the board to coincide with the ghost, power pellets, the lair of the ghost, and the pacdots.//
//If we did not use this function then the ghost, power pellets, the lair of the ghost, and the pacdots would have an error when placed in the game//
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      }
    }
  }
  createBoard()

  let pacmanCurrentIndex = 490
  squares[pacmanCurrentIndex].classList.add('pac-man')

  //This function programs the Pacman to move up, down, left, and right. This code tells the pacman where to move and when in correlation to the grid.//
//If it were not for this function then the Pacman would just be stationed in the game and the Pacman would not be able to move.//

  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode) {
      case 37:
        if(
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
          )
        pacmanCurrentIndex -= 1
        if (squares[pacmanCurrentIndex -1] === squares[363]) {
          pacmanCurrentIndex = 391
        }
        break
      case 38:
        if(
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
          ) 
        pacmanCurrentIndex -= width
        break
      case 39:
        if(
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += 1
        if (squares[pacmanCurrentIndex +1] === squares[392]) {
          pacmanCurrentIndex = 364
        }
        break
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += width
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', movePacman)


  //This function states that if one of the hotpink "Pacdots" are eaten by the Pacman, then the Pacdot will disappear and the score will get added to the "score" feature on the bottom.//

  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

  //This function states that if a power pellet is eaten, then it adds one point to the overall score of the game//
  //The function also states that if a power pellet is eaten, then it will be removed from the board.//

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

//This function states that the ghost will go at an allotted speed at an alloted time//
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

//The code below states that each ghost (determined by ID), will move from certain areas in the grid//
  ghosts = [
    new Ghost('ghost1', 348, 250),
    new Ghost('ghost2', 376, 400),
    new Ghost('ghost3', 351, 300),
    new Ghost('ghost4', 379, 500)
    ]


  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })
  ghosts.forEach(ghost => moveGhost(ghost))

  //This function states that the each ghost will move a certain length and direction each time the game is played//

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
         
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')

          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    checkForGameOver()
    }, ghost.speed)
  }

  //The functions below give the "you won" and "game over" alerts at the end of the game//

  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("Sorry, YOU LOST!"); }, 500)
    }
  }

  function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function(){ alert("Congrats, YOU WON!"); }, 500)
    }
  }
})