'use strict'

const store = require('../store.js')
const authApi = require('./api1')

let playerTurn = 0 // to figure out who starts
let currentPlayer = 'x' // assign a string to the player

// game logic below. Switch turn function
const switchPlayer = function (event) {
  if (event.target.innerHTML === '' && store.game.over === false) {
    if (currentPlayer === 'x') {
      store.game.cells[event.target.id] = 'x' // store the value of the click
      event.target.innerHTML = 'x' // the cell gets clicked by player x
      $('#content').html(` Player ${currentPlayer} turn`)

      authApi.updateGame()
      playerTurn++ // we add a turn each time a player plays
      didAnyoneWin(event)
      currentPlayer = 'o'
    } else {
      store.game.cells[event.target.id] = 'o'
      event.target.innerHTML = 'o'
      $('#content').html(` Player ${currentPlayer} turn`)
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
  $('#content').html(' Congratulations! Player ' + currentPlayer + ' wins. Cick on the New Game Button and play again !')
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
  if (playerTurn === 9) { // check for tie
    currentPlayer = 'x'
    playerTurn = 0
    $('#content').html(" It's a draw ! Click on the New Game button and play again ")
    store.game.over = true
  }
}
// resetGame function to set game board back to 0 and so that player X always starts
const resetGame = function () {
  store.game.cells = []
  $('.box').empty('data-cells')
  playerTurn = 0
  currentPlayer = 'x'
}
module.exports = {
  switchPlayer: switchPlayer,
  didAnyoneWin: didAnyoneWin,
  afterWin: afterWin,
  resetGame: resetGame
}
