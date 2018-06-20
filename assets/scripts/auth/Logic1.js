'use strict'

const store = require('../store.js')
const authApi = require('./api1')

let playerTurn = 0 // to figure out who starts
let currentPlayer = 'x' // a sign a string to the player

const switchPlayer = function (event) {
  if (event.target.innerHTML === '' && store.game.over === false) {
    if (currentPlayer === 'x') {
      store.game.cells[event.target.id] = 'x'
      event.target.innerHTML = 'x'
      authApi.updateGame()
      playerTurn++ // we add a turn each time a player plays
      didAnyoneWin(event)
      currentPlayer = 'o'
    } else {
      store.game.cells[event.target.id] = 'o'
      event.target.innerHTML = 'o'
      authApi.updateGame()
      playerTurn++
      didAnyoneWin(event)
      currentPlayer = 'x'
    }
  }
}
const afterWin = function (event) {
  store.game.over = true
  playerTurn = 0
  $('#content').html(' Congratulations! You Won ' + currentPlayer + ' Cick on the Start Button and have a rematch !')
  currentPlayer = 'x'
}

// putting in all win cobinations now,but want to check if i can just loop
const didAnyoneWin = function (event) {
  if (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'x' && store.game.cells[2] === 'x' && store.game.cells[1] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') {
  }
  if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x') {
    afterWin(event)
  }
  if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o') {
    afterWin(event)
  }
  if (playerTurn === 9) {
    currentPlayer = 'x'
    playerTurn = 0
    $('#content').html(" It's a draw ! Click on the New Game button and play again ")
    store.game.over = true
  }
}

const resetGame = function () {
  store.game.cells = []
  $('.box').empty('data-cells')
  playerTurn = 0
}
module.exports = {
  switchPlayer: switchPlayer,
  didAnyoneWin: didAnyoneWin,
  afterWin: afterWin,
  resetGame: resetGame
}
