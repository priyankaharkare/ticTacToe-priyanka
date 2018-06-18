'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const authApi = require('./api1')
// const authEvents = require('./events')

let playerTurn = 0 // to figure out who starts
// let gameBoard = [] // empty array so that we can add the winning index/key
// let gameWinner // to track who wins
let currentPlayer = 'X' // a ssign a string to the player

const switchPlayer = function (event) {
  console.log(`store.game.is`, store.game)
  // console.log(`current player is `, currentPlayer)
  if (event.target.innerHTML === '' && store.game.over === false) {
    // console.log('start playing now')
    if (currentPlayer === 'X') {
      store.game.cells[event.target.id] = 'X'
      event.target.innerHTML = 'X'
      authApi.updateGame()
      playerTurn++ // we add a turn each time a player plays
      console.log(`player turn is `, playerTurn)
      console.log(`currentPlayer is ` + currentPlayer)
      currentPlayer = 'O'
      didAnyoneWin(event)
      // console.log('current player 1 is ' + currentPlayer)
    } else {
      store.game.cells[event.target.id] = 'O'
      event.target.innerHTML = 'O'
      authApi.updateGame()
      playerTurn++
      console.log(`player turn 2 is `, playerTurn)
      console.log(`currentPlayer is ` + currentPlayer)
      currentPlayer = 'X'
      didAnyoneWin(event)
    }
  }
}
const afterWin = function (event) {
  console.log(currentPlayer + 'wins')
  store.game.over = true
  playerTurn = 0
  $('#content').html(' Congratulations! You Won ' + currentPlayer + 'Cick on the Start Button and have a rematch !')
  currentPlayer = 'X'
}

// putting in all win cobinations now,but want to check if i can just loop
const didAnyoneWin = function (event) {
  // console.log('gameboard is ', store.game.cells[0])
  if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    afterWin(event)
    console.log(currentPlayer + 'wins')
  }
  if (store.game.cells[0] === 'X' && store.game.cells[2] === 'X' && store.game.cells[1] === 'X') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    afterWin(event)
  }
  if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
  }
  if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    console.log(store.game.cells, `  is store game cells`)
    afterWin(event)
  }
  if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    afterWin(event)
  }
  if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    afterWin(event)
  }
  if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    afterWin(event)
  }
  if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
    afterWin(event)
  }
  if (playerTurn === 9) {
  // console.log('its a tie')
    currentPlayer = 'X'
    playerTurn = 0
    $('#content').html(" It's a tie! Click on the New Game button and play again ")
    store.game.over = true
  }
}
module.exports = {
  switchPlayer: switchPlayer,
  didAnyoneWin: didAnyoneWin,
  afterWin: afterWin
  // resetGame: resetGame
}
